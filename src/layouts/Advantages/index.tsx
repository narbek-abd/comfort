import React from "react";
import * as G from "../../globalStyle";
import delivery from "../../assets/icons/delivery.svg";
import cashback from "../../assets/icons/cashback.svg";
import premium from "../../assets/icons/premium.svg";
import support from "../../assets/icons/support.svg";

import * as S from "./style";
import Icon from "../../components/Icon";

const Advantages = () => {
  return (
    <S.Advantages>
      <G.SectionTitle>What Shopex Offer!</G.SectionTitle>
      
      <G.Container>
        <S.Inner>
          <S.Item>
            <img src={delivery} alt="" />

            <h3>24/7 Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </S.Item>

          <S.Item>
            <img src={cashback} alt="" />

            <h3>24/7 Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </S.Item>

          <S.Item>
            <img src={premium} alt="" />

            <h3>24/7 Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </S.Item>

          <S.Item>
            <img src={support} alt="" />

            <h3>24/7 Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </S.Item>
        </S.Inner>
      </G.Container>
    </S.Advantages>
  );
};

export default Advantages;
