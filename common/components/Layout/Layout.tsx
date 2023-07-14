import Header from '../Header/Header';
import {NextPage} from 'next';
import {PropsWithChildren} from 'react';
import {store} from '@/assets/store/store';
import {Provider} from 'react-redux';
import {MainLayout, StyledWrapper} from "@/common/components/Layout/Layout.styled";

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const {children} = props
  return (
    <StyledWrapper>
      <Provider store={store}>
        <Header/>
        <MainLayout>{children}</MainLayout>
      </Provider>
    </StyledWrapper>
  )
}


