import React from "react";
import { useState, useEffect } from 'react';
import styled from "styled-components";

const StyledIphonePro = styled.div`
  background-color: #ffffff;
  display: flex;
  position: relative;
  width: 100%;
  * {
    word-break: break-word;
  }

  & .folhaesquerdacima {
    object-fit: cover;
    position: relative;
  }

  & .frame {
     align-items: center; // This centers items vertically in a flex container
     display: flex;
     flex-direction: column; // Stack children vertically
     justify-content: center; // This centers items horizontally in a flex container
     position: relative;
     gap: 20px; // Adjust the gap as needed
     padding: 20px; // Adjust padding as needed
   }
  & .text-wrapper {
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-weight: 800;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
  }

  & .div {
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .folhaesquerda {
    object-fit: cover;
    position: absolute;
  }

  & .frame-2 {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    gap: auto;
    padding: auto;
  }

  & .homesection {
    object-fit: cover;
    position: relative;
  }

  & .folhameio {
    object-fit: cover;
    position: absolute;
  }

  & .folhadireitabaixo {
    object-fit: cover;
    position: absolute;
  }

  & .frame-3 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
    word-break: break-word;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-weight: 800;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .frame-4 {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8.51px;
    justify-content: center;
    position: relative;
  }

  & .img {
    height: 491.09px;
    object-fit: cover;
    position: relative;
    width: 559.83px;
  }

  & .folhameio-2 {
    height: 90px;
    left: -32px;
    object-fit: cover;
    position: absolute;
    top: -22px;
    width: 118px;
  }

  & .folhadireitabaixo-2 {
    height: 177px;
    left: 387px;
    object-fit: cover;
    position: absolute;
    top: 377px;
    width: 198px;
  }

  & .folhaesquerda-2 {
    object-fit: cover;
    position: absolute;
  }

  & .folhaesquerdacima-2 {
    left: 0;
    object-fit: cover;
    position: absolute;
  }

  & .frame-5 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    margin-right: -34px;
    position: relative;
  }

  & .homesection-2 {
    height: 843px;
    object-fit: cover;
    position: relative;
    width: 961px;
  }

  & .folhameio-3 {
    height: 167px;
    left: 28px;
    object-fit: cover;
    position: absolute;
    top: -64px;
    width: 218px;
  }

  & .folhadireitabaixo-3 {
    height: 333px;
    left: 659px;
    object-fit: cover;
    position: absolute;
    top: 624px;
    width: 373px;
  }
  & .img, & .text-wrapper {
     display: block; // Ensures the element is block-level for margin auto to work
     margin: 0 auto; // Centers the element horizontally
     padding: 10px; // Adjust padding as needed
   }
`;

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
const Home = () => {
  const screenWidth = useWindowWidth(); // Using the custom hook


  return (
    <StyledIphonePro
      style={{
        alignItems:
          (screenWidth >= 1200 && screenWidth < 1885) || (screenWidth >= 834 && screenWidth < 1200) || screenWidth < 834
            ? "flex-start"
            : screenWidth >= 1885
            ? "center"
            : undefined,
        flexWrap:
          (screenWidth >= 1200 && screenWidth < 1885) || (screenWidth >= 834 && screenWidth < 1200) || screenWidth < 834
            ? "wrap"
            : undefined,
        gap:
          screenWidth < 834
            ? "6px 6px"
            : screenWidth >= 834 && screenWidth < 1200
            ? "48px 0px"
            : screenWidth >= 1200 && screenWidth < 1885
            ? "14.58px 0px"
            : screenWidth >= 1885
            ? "50px"
            : undefined,
        height:
          screenWidth < 834
            ? "852px"
            : screenWidth >= 834 && screenWidth < 1200
            ? "1194px"
            : screenWidth >= 1200 && screenWidth < 1885
            ? "661.4px"
            : screenWidth >= 1885
            ? "1080px"
            : undefined,
        minWidth:
          screenWidth < 834
            ? "393px"
            : screenWidth >= 834 && screenWidth < 1200
            ? "834px"
            : screenWidth >= 1200 && screenWidth < 1885
            ? "1200px"
            : screenWidth >= 1885
            ? "1885px"
            : undefined,
        padding:
          screenWidth >= 1200 && screenWidth < 1885
            ? "23.33px 99.17px"
            : screenWidth >= 1885
            ? "10px 167px"
            : undefined,
      }}
    >
      {((screenWidth >= 834 && screenWidth < 1200) || screenWidth < 834) && (
        <>
          <img
            className="folhaesquerdacima"
            style={{
              height: screenWidth < 834 ? "103px" : screenWidth >= 834 && screenWidth < 1200 ? "128px" : undefined,
              width: screenWidth < 834 ? "58px" : screenWidth >= 834 && screenWidth < 1200 ? "69px" : undefined,
            }}
            alt="Folhaesquerdacima"
            src={
              screenWidth < 834
                ? "https://c.animaapp.com/9CLtFLVA/img/folhaesquerdacima-1@2x.png"
                : screenWidth >= 834 && screenWidth < 1200
                ? "https://c.animaapp.com/9CLtFLVA/img/folhaesquerdacima-1-3@2x.png"
                : undefined
            }
          />
          <div
            className="frame"
            style={{
              gap: screenWidth < 834 ? "3.61px" : screenWidth >= 834 && screenWidth < 1200 ? "7.29px" : undefined,
              height: screenWidth < 834 ? "852px" : screenWidth >= 834 && screenWidth < 1200 ? "1055px" : undefined,
              width: screenWidth < 834 ? "98px" : screenWidth >= 834 && screenWidth < 1200 ? "199px" : undefined,
            }}
          >
            <div
              className="text-wrapper"
              style={{
                fontSize: screenWidth < 834 ? "34.6px" : screenWidth >= 834 && screenWidth < 1200 ? "70px" : "96px", // Adjusted fontSize based on screenW
                height: screenWidth < 834 ? "33.65px" : screenWidth >= 834 && screenWidth < 1200 ? "68px" : undefined,
                marginLeft:
                  screenWidth < 834 ? "-50.95px" : screenWidth >= 834 && screenWidth < 1200 ? "-102.50px" : undefined,
                marginRight:
                  screenWidth < 834 ? "-50.95px" : screenWidth >= 834 && screenWidth < 1200 ? "-102.50px" : undefined,
                width: screenWidth < 834 ? "199.89px" : screenWidth >= 834 && screenWidth < 1200 ? "404px" : undefined,
              }}
            >
              Texto CTA
            </div>
            <div
              className="div"
              style={{
                fontSize:
                  screenWidth < 834 ? "14.4px" : screenWidth >= 834 && screenWidth < 1200 ? "29.2px" : undefined,
                height: screenWidth < 834 ? "173.18px" : screenWidth >= 834 && screenWidth < 1200 ? "350px" : undefined,
                marginLeft:
                  screenWidth < 834 ? "-34.37px" : screenWidth >= 834 && screenWidth < 1200 ? "-69.00px" : undefined,
                marginRight:
                  screenWidth < 834 ? "-34.37px" : screenWidth >= 834 && screenWidth < 1200 ? "-69.00px" : undefined,
                width: screenWidth < 834 ? "166.74px" : screenWidth >= 834 && screenWidth < 1200 ? "337px" : undefined,
              }}
            >
              CopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopy
            </div>
            <img
              className="folhaesquerda"
              style={{
                height: screenWidth < 834 ? "110px" : screenWidth >= 834 && screenWidth < 1200 ? "223px" : undefined,
                left: screenWidth < 834 ? "-58px" : screenWidth >= 834 && screenWidth < 1200 ? "-117px" : undefined,
                top: screenWidth < 834 ? "600px" : screenWidth >= 834 && screenWidth < 1200 ? "691px" : undefined,
                width: screenWidth < 834 ? "148px" : screenWidth >= 834 && screenWidth < 1200 ? "293px" : undefined,
              }}
              alt="Folhaesquerda"
              src={
                screenWidth < 834
                  ? "https://c.animaapp.com/9CLtFLVA/img/folhaesquerda-1-3@2x.png"
                  : screenWidth >= 834 && screenWidth < 1200
                  ? "https://c.animaapp.com/9CLtFLVA/img/folhaesquerda-1-2@2x.png"
                  : undefined
              }
            />
          </div>
          <div
            className="frame-2"
            style={{
              gap: screenWidth < 834 ? "4.21px" : screenWidth >= 834 && screenWidth < 1200 ? "8.51px" : "10px", // Adjusted gap based on screenWidth
              height: screenWidth < 834 ? "805px" : screenWidth >= 834 && screenWidth < 1200 ? "997px" : undefined,
              width: screenWidth < 834 ? "212px" : screenWidth >= 834 && screenWidth < 1200 ? "428px" : undefined,
            }}
          >
            <img
              className="homesection"
              style={{
                height: screenWidth < 834 ? "174.66px" : screenWidth >= 834 && screenWidth < 1200 ? "353px" : undefined,
                width: screenWidth < 834 ? "195.94px" : screenWidth >= 834 && screenWidth < 1200 ? "396px" : undefined,
              }}
              alt="Homesection"
              src={
                screenWidth < 834
                  ? "https://c.animaapp.com/9CLtFLVA/img/homesection-1-3@2x.png"
                  : screenWidth >= 834 && screenWidth < 1200
                  ? "https://c.animaapp.com/9CLtFLVA/img/homesection-1-2@2x.png"
                  : undefined
              }
            />
            <img
              className="folhameio"
              style={{
                height: screenWidth < 834 ? "45px" : screenWidth >= 834 && screenWidth < 1200 ? "90px" : undefined,
                left: screenWidth < 834 ? "9px" : screenWidth >= 834 && screenWidth < 1200 ? "-15px" : undefined,
                top: screenWidth < 834 ? "293px" : screenWidth >= 834 && screenWidth < 1200 ? "277px" : undefined,
                width: screenWidth < 834 ? "59px" : screenWidth >= 834 && screenWidth < 1200 ? "118px" : undefined,
              }}
              alt="Folhameio"
              src={
                screenWidth < 834
                  ? "https://c.animaapp.com/9CLtFLVA/img/folhameio-1-3@2x.png"
                  : screenWidth >= 834 && screenWidth < 1200
                  ? "https://c.animaapp.com/9CLtFLVA/img/folhameio-1-2@2x.png"
                  : undefined
              }
            />
            <img
              className="folhadireitabaixo"
              style={{
                height: screenWidth < 834 ? "88px" : screenWidth >= 834 && screenWidth < 1200 ? "177px" : undefined,
                left: screenWidth < 834 ? "144px" : screenWidth >= 834 && screenWidth < 1200 ? "300px" : undefined,
                top: screenWidth < 834 ? "434px" : screenWidth >= 834 && screenWidth < 1200 ? "561px" : undefined,
                width: screenWidth < 834 ? "81px" : screenWidth >= 834 && screenWidth < 1200 ? "170px" : undefined,
              }}
              alt="Folhadireitabaixo"
              src={
                screenWidth < 834
                  ? "https://c.animaapp.com/9CLtFLVA/img/folhadireitabaixo-1-3@2x.png"
                  : screenWidth >= 834 && screenWidth < 1200
                  ? "https://c.animaapp.com/9CLtFLVA/img/folhadireitabaixo-1-2@2x.png"
                  : undefined
              }
            />
          </div>
        </>
      )}

      {((screenWidth >= 1200 && screenWidth < 1885) || screenWidth >= 1885) && (
        <div
          className="frame-3"
          style={{
            gap: screenWidth >= 1200 && screenWidth < 1885 ? "7.29px" : screenWidth >= 1885 ? "10px" : undefined,
            height: screenWidth >= 1200 && screenWidth < 1885 ? "519.93px" : screenWidth >= 1885 ? "713px" : undefined,
          }}
        >
          <div
            className="text-wrapper-2"
            style={{
              fontSize: screenWidth >= 1200 && screenWidth < 1885 ? "70px" : screenWidth >= 1885 ? "96px" : undefined,
              height: screenWidth >= 1200 && screenWidth < 1885 ? "67.82px" : screenWidth >= 1885 ? "93px" : undefined,
              width: screenWidth >= 1200 && screenWidth < 1885 ? "383.57px" : screenWidth >= 1885 ? "526px" : undefined,
            }}
          >
            Texto CTA
          </div>
          <div
            className="text-wrapper-3"
            style={{
              fontSize: screenWidth >= 1200 && screenWidth < 1885 ? "29.2px" : screenWidth >= 1885 ? "40px" : undefined,
              height:
                screenWidth >= 1200 && screenWidth < 1885 ? "350.75px" : screenWidth >= 1885 ? "481px" : undefined,
              width: screenWidth >= 1200 && screenWidth < 1885 ? "418.57px" : screenWidth >= 1885 ? "574px" : undefined,
            }}
          >
            CopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopyCopy
          </div>
        </div>
      )}

      {screenWidth >= 1200 && screenWidth < 1885 && (
        <div className="frame-4">
          <img className="img" alt="Homesection" src="https://c.animaapp.com/9CLtFLVA/img/homesection-1-1.png" />
          <img className="folhameio-2" alt="Folhameio" src="https://c.animaapp.com/9CLtFLVA/img/folhameio-1-1@2x.png" />
          <img
            className="folhadireitabaixo-2"
            alt="Folhadireitabaixo"
            src="https://c.animaapp.com/9CLtFLVA/img/folhadireitabaixo-1-1@2x.png"
          />
        </div>
      )}

      {((screenWidth >= 1200 && screenWidth < 1885) || screenWidth >= 1885) && (
        <>
          <img
            className="folhaesquerda-2"
            style={{
              height: screenWidth >= 1200 && screenWidth < 1885 ? "197px" : screenWidth >= 1885 ? "104px" : undefined,
              left: screenWidth >= 1200 && screenWidth < 1885 ? "0" : screenWidth >= 1885 ? "67px" : undefined,
              top: screenWidth >= 1200 && screenWidth < 1885 ? "403px" : screenWidth >= 1885 ? "131px" : undefined,
              width: screenWidth >= 1200 && screenWidth < 1885 ? "303px" : screenWidth >= 1885 ? "149px" : undefined,
            }}
            alt="Folhaesquerda"
            src={
              screenWidth >= 1200 && screenWidth < 1885
                ? "https://c.animaapp.com/9CLtFLVA/img/folhaesquerda-1-1@2x.png"
                : screenWidth >= 1885
                ? "https://c.animaapp.com/9CLtFLVA/img/folhaesquerdacima-1-1@2x.png"
                : undefined
            }
          />
          <img
            className="folhaesquerdacima-2"
            style={{
              height: screenWidth >= 1200 && screenWidth < 1885 ? "63px" : screenWidth >= 1885 ? "341px" : undefined,
              top: screenWidth >= 1200 && screenWidth < 1885 ? "23px" : screenWidth >= 1885 ? "707px" : undefined,
              width: screenWidth >= 1200 && screenWidth < 1885 ? "90px" : screenWidth >= 1885 ? "509px" : undefined,
            }}
            alt="Folhaesquerdacima"
            src={
              screenWidth >= 1200 && screenWidth < 1885
                ? "https://c.animaapp.com/9CLtFLVA/img/folhaesquerdacima-1-2@2x.png"
                : screenWidth >= 1885
                ? "https://c.animaapp.com/9CLtFLVA/img/folhaesquerda-1.png"
                : undefined
            }
          />
        </>
      )}

      {screenWidth >= 1885 && (
        <div className="frame-5">
          <img
            className="homesection-2"
            alt="Homesection"
            src="https://c.animaapp.com/9CLtFLVA/img/homesection-1.png"
          />
          <img className="folhameio-3" alt="Folhameio" src="https://c.animaapp.com/9CLtFLVA/img/folhameio-1@2x.png" />
          <img
            className="folhadireitabaixo-3"
            alt="Folhadireitabaixo"
            src="https://c.animaapp.com/9CLtFLVA/img/folhadireitabaixo-1@2x.png"
          />
        </div>
      )}
    </StyledIphonePro>
  );

};
export default Home;
