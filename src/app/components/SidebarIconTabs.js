'use client';
import React, { useState } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { FaMapPin } from 'react-icons/fa';
import { FaRoute } from 'react-icons/fa';
import { MdOutlineManageHistory } from 'react-icons/md';
import SidebarContent from './SidebarContent';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const SidebarIconTabsT = () => {
  const [activeTab, setActiveTab] = useState('Rail-Announcements');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='h-75'>
      <Nav
        pills
        className='nav-justified bg-dark p-2 mb-2 rounded'
        onSelect={handleTabClick}
      >
        <NavItem>
          <NavLink
            active={activeTab === 'Rail-Announcements'}
            onClick={() => handleTabClick('Rail-Announcements')}
          >
            <MdOutlineManageHistory />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeTab === 'Add-passenger-mobile'}
            onClick={() => handleTabClick('Add-passenger-mobile')}
          >
            <FaRoute />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeTab === 'Do-not-overcharge'}
            onClick={() => handleTabClick('Do-not-overcharge')}
          >
            <FaMapPin />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeTab === 'Do-not-use-personal-ID'}
            onClick={() => handleTabClick('Do-not-use-personal-ID')}
          >
            <FaCalendarCheck />
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className='h-75 Sidebar-Tab-Content'>
        <TabPane tabId='Rail-Announcements'>
          <SidebarContent
            heading='Rail Announcements'
            badge='normal'
            badgeColor='primary'
            description='Refunds will be processed only after you verify the OTP. So be sure you verify the OTP for every cancelled tickets.'
          />
        </TabPane>
        <TabPane tabId='Add-passenger-mobile'>
          <SidebarContent
            heading='Add passenger mobile'
            badge='urgent'
            badgeColor='success'
            description='Always add passage mobile number. It will help you in many situation. Always add passage mobile number. It will help you in many situation.'
          />
        </TabPane>
        <TabPane tabId='Do-not-overcharge'>
          <SidebarContent
            heading='Do not overcharge'
            badge='info'
            badgeColor='info'
            description='It is advised not to overcharge your passenger. Overcharging may lead to cancellation of your agent ID'
          />
        </TabPane>
        <TabPane tabId='Do-not-use-personal-ID'>
          <SidebarContent
            heading='Do not use personal ID'
            badge='news'
            badgeColor='danger'
            description='Please do not use personal IRCTC IDs. Using IRCTC personal ID is not allowed to book the tickets.'
          />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default SidebarIconTabsT;
