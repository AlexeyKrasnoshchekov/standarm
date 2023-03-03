import { withLayout } from '@/layout/Layout';
import React from 'react';
import '../styles/404.scss';

type Props = {};

export function Error404({}: Props) {
  return (
    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            4
          </span>
        </h1>
        <h3 className="fadeIn">Страница не найдена</h3>
        <button type="button" name="button">
          Вернуться на Домашнюю
        </button>
      </div>
    </div>
  );
}

export default withLayout(Error404);
