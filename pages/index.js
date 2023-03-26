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
      </Head>
      <Layout>
        <Form className="form"/>
      </Layout>
    </>
  );
}
