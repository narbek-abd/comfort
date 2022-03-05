import React from 'react';

import * as S from "./style";

interface AdminProps {
  children?: React.ReactNode;
}

const Admin = ({children} : AdminProps) => {
  return (
    <S.Admin>
        <S.Inner>
        
        </S.Inner>
      
    </S.Admin>
  );
};

export default Admin;