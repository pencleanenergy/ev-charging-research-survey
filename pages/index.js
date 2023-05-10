import Head from "next/head";
import Form from "@/components/form";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Survey</title>
        <meta name="description" content="Survey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Form className="form"/>
      </Layout>
    </>
  );
}
