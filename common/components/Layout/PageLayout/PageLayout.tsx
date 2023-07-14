import {NextPage} from 'next';
import {PropsWithChildren, ReactElement} from 'react';
import Header from '../../Header/Header';
import {Navbar} from '../../Navbar/Navbar';
import {store} from '@/assets/store/store';
import {Provider} from 'react-redux';
import {MainPageLayout, PagePageLayout, StyledWrapperPage} from "@/common/components/Layout/Layout.styled";

export const PageLayout: NextPage<PropsWithChildren> = (props) => {
  const {children} = props
  return (
    <StyledWrapperPage>
      <Provider store={store}>
        <Header/>
        <PagePageLayout>
          <Navbar/>
          <MainPageLayout>{children}</MainPageLayout>
        </PagePageLayout>
      </Provider>
    </StyledWrapperPage>
  )
}

export const getLayout = (page: ReactElement) => {
  return <PageLayout>{page}</PageLayout>
}

