import { withLayout } from '@/layout/Layout';
import React from 'react'

type Props = {}

function Error500({}: Props) {
  return (
    <div>Ошибка 500</div>
  )
}

export default withLayout(Error500);