import style from './Wrapper.module.scss'

interface WrapperInterface {
  children: React.ReactNode
}

export function Wrapper({ children }: WrapperInterface) {
  return <main className={style.wrapperClass}>{children}</main>
}
