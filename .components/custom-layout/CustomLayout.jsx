import React from "react";
import Banner from "../banner";
import CoverImg from "../CoverImg";
import Content from "../Content";
import Promotion from "../Promotion";
import PromotionBannerCta from "../PromotionBannerCta";

const rgxBlogRoute = /^\/blog\/?$/;

const CustomLayout = (props) => {
  const {
    headerComp: Header,
    sidepanelComp: Sidepanel,
    footerComp: Footer,
  } = props;
  const isBlogRoute = rgxBlogRoute.test(window.location.pathname);

  if(!props.frontmatter) return <>Frontmatter unavailable</>

  return (
    <>
      <Header />
      <Sidepanel />
      {(props.frontmatter.bannerTitle || props.frontmatter.bannerSubtitle) && (
        <Banner config={props.config} height={isBlogRoute && "60vh"}>
          <div
            style={
              isBlogRoute
                ? { maxWidth: "546px", padding: "0 16px" }
                : { maxWidth: "768px" }
            }
          >
            {props.frontmatter?.bannerDate || props.frontmatter?.date}
            <h1 id="banner-title">
              {props.frontmatter?.bannerTitle || props.frontmatter?.title}
            </h1>
            {props.frontmatter?.bannerSubtitle || props.frontmatter?.subtitle}
          </div>
          {(props.frontmatter?.bannerImg || props.frontmatter?.ogImg) && (
            <CoverImg
              src={props.frontmatter?.bannerImg || props.frontmatter?.ogImg}
            />
          )}
        </Banner>
      )}
      <Content toc={props.toc.length && props.toc}>{props.children}</Content>
      {(props.frontmatter?.promotionTitle ||
        props.frontmatter?.promotionSubtitle) && (
          <Promotion config={props.config}>
            <h2>{props.frontmatter.promotionTitle}</h2>
            <p>{props.frontmatter.promotionSubtitle}</p>
            {(props.frontmatter?.promotionLink ||
              props.frontmatter.promotionCTA) && (
                <PromotionBannerCta
                  href={props.frontmatter.promotionLink}
                  cta={props.frontmatter.promotionCTA}
                />
              )}
          </Promotion>
        )}
      <Footer />
    </>
  );
};

export default CustomLayout;
