"use client";
import { Product, ProductSelect, ChipData, Users } from "@/types/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
type ShoppingCartProviderProps = {
  children: ReactNode;
};
type Anchor = "top" | "left" | "bottom" | "right";
interface AppState {
  product: Product[];
  searchTerm: string;
  chipData: readonly ChipData[];
  /*  category:  string[]; */
  result: string[];
  valueSearch: number[];
  dataSelect: ProductSelect[];
  selectedIndex: number;
  state: {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
  searchName: string;

  user: string;
}
interface AppContext extends AppState {
  addProduct: (id: number, number?: number) => void;
  NumberProduct: (id: number, value: number) => void;
  decreaseProductQuantity: (id: number) => void;
  deletProduct: (id: number) => void;
  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;

  setSelectedIndex: (selectedIndex: number) => void;

  setChipData: (value: React.SetStateAction<readonly ChipData[]>) => void;
  setSearchName: (searchName: string) => void;
  setSearchTerm: (searchTerm: string) => void;
  setValueSearch: (valueSearch: number[]) => void;
  setUser: (user: React.SetStateAction<string>) => void;
}

export const ProductsContexts = createContext({} as AppContext);

let result: string[] = ["All product"];

function ProductsProvider({ children }: ShoppingCartProviderProps) {
  const [product, setProduct] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [chipData, setChipData] = useLocalStorage<readonly ChipData[]>(
    "ArrayShipSearch",
    []
  );
  const category: (number | string[])[] = product.map((item) => {
    return result.includes(item.category) ? result : result.push(item.category);
  });
  const [valueSearch, setValueSearch] = useState([0, 2000]);
  const [dataSelect, setDataSelect] = useLocalStorage<ProductSelect[]>(
    "shopping-cart",
    []
  );
  const [searchName, setSearchName] = useState("");

  const [user, setUser] = useLocalStorage<string>("user", "");
  const fetchUserData = () => {
    fetch(`https://products-jtax.onrender.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setProduct(datas);
      });
  };

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  useEffect(() => {
    fetchUserData();
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("shopping-cart", JSON.stringify(dataSelect));
    localStorage.setItem("ArrayShipSearch", JSON.stringify(chipData));
  }, [dataSelect, chipData, user]);

  //------------- add product  from card -------
  const addProduct = (id: number, number: number = 1) => {
    setDataSelect((dataSelect) => {
      if (dataSelect.find((item) => item.id === id) == null) {
        return [
          ...dataSelect,
          { ...product[id - 1], quantity: Number(number) },
        ];
      } else {
        return dataSelect.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + Number(number),
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  // add number product count from cart ---------------------
  const NumberProduct = (id: number, value: number) => {
    setDataSelect(() => {
      if (dataSelect.find((item) => item.id === id) && value <= 0) {
        return dataSelect.filter((item: ProductSelect) => item.id !== id);
      } else {
        return dataSelect?.map((item: ProductSelect) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: Number(value),
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  // decrease product count from cart ---------------------
  const decreaseProductQuantity = (id: number) => {
    setDataSelect(() => {
      if (dataSelect.find((item) => item.id === id)?.quantity === 1) {
        return dataSelect.filter((item) => item.id !== id);
      } else {
        return dataSelect?.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  //---------------delete product -----------------
  const deletProduct = (id: number) => {
    setDataSelect(() => {
      if (dataSelect.find((item) => item.id === id)?.quantity || 0) {
        return dataSelect.filter((item) => item.id !== id);
      } else {
        return dataSelect;
      }
    });
  };
  //---------------toggle open drawer-------------------------

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  //--------------------------------Data chip */

  return (
    <ProductsContexts.Provider
      value={{
        product,
        addProduct,
        dataSelect,
        deletProduct,
        decreaseProductQuantity,
        toggleDrawer,
        state,
        result,
        selectedIndex,
        setSelectedIndex,
        NumberProduct,
        setChipData,
        chipData,
        setSearchName,
        searchName,
        searchTerm,
        setSearchTerm,
        valueSearch,
        setValueSearch,

        setUser,
        user,
      }}
    >
      {children}
    </ProductsContexts.Provider>
  );
}

export default ProductsProvider;
