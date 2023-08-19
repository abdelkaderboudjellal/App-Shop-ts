import React from "react";

type Props = {
  storename: string;
};
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Users } from "@/types/types";
import { Typography } from "@mui/material";

type Repo = {
  user: Users;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://products-jtax.onrender.com/user`);
  const repo = await res.json();
  const paths = repo.map((NameStore: Users) => {
    return {
      params: { name: NameStore.email.toString().split("@")[0] },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async (context) => {
  const res = await fetch(
    `https://products-jtax.onrender.com/user?email=${context}@email.com`
  );
  const repo = await res.json();
  return { props: { repo } };
};

const storeComponent = ({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      {" "}
      <Typography variant="h1" component={"h1"}>
        {repo?.user.email}
      </Typography>
    </div>
  );
};

export default storeComponent;
