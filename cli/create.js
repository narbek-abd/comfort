const fs = require('fs'); // модуль для работы с файловой системой
const path = require('path'); // модуль для преобразования пути
const minimist = require('minimist'); // модуль для преобразования строки аргументов в объект

const args = minimist(process.argv);

const srcPath = [__dirname, '..', 'src']; // путь до папки src текущего проекта
const arrPath = args.path.split('/'); // разбиваем путь из аргумента командной строки на массив
const componentName = arrPath[arrPath.length - 1]; // последний элемент - название компонента

// создание директорий из аргумента (при необходимости)
const currentArray = [];
arrPath.forEach(element => {
  currentArray.push(element);
  const currentResolvePath = path.resolve(...srcPath, ...currentArray);
  if (!fs.existsSync(currentResolvePath)) { // проверка - существует такая директория или нет?
    fs.mkdirSync(currentResolvePath); // если нет, то создаем новую
  }
});

const componentPath = [...srcPath, ...arrPath];

// создание компонента
const componentCode = `import React from 'react';
import { SContainer } from "../../globalStyle";

import {
  S${componentName},
  SInner,
} from "./style";

const ${componentName} = () => {
  return (
    <S${componentName}>
      <SContainer>
        <SInner>
        
        </SInner>
      </SContainer>
      
    </S${componentName}>
  );
};

export default ${componentName};


export default ${componentName};`;
fs.writeFileSync(path.resolve(...componentPath, `${componentName}.jsx`), componentCode);

// создание индексного файла
const indexCode = `export { default } from './${componentName}';`;
fs.writeFileSync(path.resolve(...componentPath, 'index.js'), indexCode);

// создание файла стилей
const styleCode = `import styled from "styled-components/macro";

export const S${componentName} = styled.div\`


\`

export const SInner = styled.div\`


\`
 `;
fs.writeFileSync(path.resolve(...componentPath, `${componentName}.js`), styleCode);
