import React from 'react'
import Stats from '../components/Stats/Stats'
import Content from '../ui/Content'
import Main from '../ui/Main'
import Team from '../components/Team/Team'
import Event from '../components/Event/Event'
import Profile from '../components/Profile/Profile'
import SideFunction from '../components/SideFunction'
import PropertyCards from '../components/propretyCard/PropertyCards'
const Home = ({darkMode}) => {
  return (
    <div>
      <SideFunction />
        <Main>
        <Content>
          <Stats darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team />
            <Event />
          </div>
        </Content>
        <Profile />
      </Main>
        <PropertyCards/>
    </div>
  )
}

export default Home