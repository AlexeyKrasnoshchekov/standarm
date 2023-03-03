import { withLayout } from '@/layout/Layout';
import React from 'react'

type Props = {}

export function Error404({}: Props) {
  return (
    <div>Ошибка 404</div>
  )
}

export default withLayout(Error404);