"use client";
import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "@/components/authProvider";
import LoginPage from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import {
  UserCreate,
  UserEdit,
  UserList,
  UserShow,
} from "@/components/user/Users";
import UserIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Dehaze";

import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "@/components/Category";

// https://jsonplaceholder.typicode.com" -------> Contoh
const dataProvider = jsonServerProvider(process.env.api_url);

function Bozz() {
  return (
    <>
      <Admin
        title="Page Admin"
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={LoginPage}
        dashboard={Dashboard}
      >
        <Resource
          name="users"
          list={UserList}
          show={UserShow}
          create={UserCreate}
          edit={UserEdit}
          icon={UserIcon}
        />
        <Resource
          name="categories"
          list={CategoryList}
          show={CategoryShow}
          create={CategoryCreate}
          edit={CategoryEdit}
          icon={CategoryIcon}
          recordRepresentation="name"
        />
      </Admin>
    </>
  );
}

export default Bozz;
