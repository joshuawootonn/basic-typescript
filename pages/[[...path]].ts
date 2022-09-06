import "../lib/makeswift/register-components";

import {
  getStaticProps as makeswiftGetStaticProps,
  PageProps as MakeswiftPageProps,
} from "@makeswift/runtime/next";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

import { getProduct } from "lib/shopify";
import { PageProps } from "lib/types";

type Props = MakeswiftPageProps & PageProps;

export async function getStaticProps(
  ctx: GetStaticPropsContext<{ path: string[] }>
): Promise<GetStaticPropsResult<Props>> {
  const makeswiftResult = await makeswiftGetStaticProps(ctx);

  if (!("props" in makeswiftResult)) return makeswiftResult;

  const product = await getProduct();

  return {
    ...makeswiftResult,
    props: { ...makeswiftResult.props, product },
  };
}

export { getStaticPaths, Page as default } from "@makeswift/runtime/next";
