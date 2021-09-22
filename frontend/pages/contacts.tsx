import React from "react";
import type { NextPage } from "next";

// components
import ContacsSection from "../components/contacts/ContactsSection";
import Head from "next/head";

const Contacts: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>guilhermeabel | Contacts</title>
        <meta title="guilhermeabel Contact Us" />
        <meta name="keywords" content="coding, web development, programming, javascript, projects , github, profiles, services, contacts, guilhermeabel, guilhermeabel"/>
        <meta name="description" content="contact us for more information about my digital service , products, documents I am guilhermeabel and I will appreciate you"/>
      </Head>
      <ContacsSection />
    </React.Fragment>
  );
};

export default Contacts;
