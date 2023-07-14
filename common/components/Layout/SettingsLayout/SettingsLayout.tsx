import {NextPage} from 'next';
import {PropsWithChildren, ReactElement} from 'react';
import Header from '../../Header/Header';
import {store} from '@/assets/store/store';
import {Provider} from 'react-redux';
import {PageSettings, StyledWrapperPage} from "@/common/components/Layout/Layout.styled";

export const SettingsLayout: NextPage<PropsWithChildren> = (props) => {
  const {children} = props
  return (
    <StyledWrapperPage>
      <Provider store={store}>
        <Header/>
        <PageSettings>
          {children}
        </PageSettings>
      </Provider>
    </StyledWrapperPage>
  )
}

export const getLayout = (page: ReactElement) => {
  return <SettingsLayout>{page}</SettingsLayout>
}

