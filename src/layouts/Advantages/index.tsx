import React from 'react';
import { SContainer, SectionTitle } from "../../globalStyle";
import delivery  from '../../assets/icons/delivery.svg';
import cashback  from '../../assets/icons/cashback.svg';
import premium  from '../../assets/icons/premium.svg';
import support  from '../../assets/icons/support.svg';

import {
  SAdvantages,
  SInner,
SItem,
} from "./style";
import { Icon } from '../../components/Icon';

const Advantages = () => {
  return (
    <SAdvantages>
    <SectionTitle>What Shopex Offer!</SectionTitle>
      <SContainer>
        <SInner>
          <SItem>
            <img src={delivery} alt="" />

            <h3>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </SItem>

          <SItem>
            <img src={cashback} alt="" />

            <h3>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </SItem>

          <SItem>
            <img src={premium} alt="" />

            <h3>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </SItem>

          <SItem>
            <img src={support} alt="" />

            <h3>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </SItem>
        </SInner>
      </SContainer>
      
    </SAdvantages>
  );
};

export default Advantages;