import React, { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { AppTopbar } from '@/AppTopbar'
import { AppFooter } from '@/AppFooter'
import { AppMenu } from '@/AppMenu'
import PrimeReact from 'primereact/api'
import { useUI } from '@/context/ConfigProvider/ConfigProvider'

const LayoutAdmin = () => {
  const {
    layoutMode,
    layoutColorMode,
    setStaticMenuInactive,
    setOverlayMenuActive,
    mobileMenuActive,
    setMobileMenuActive,
    mobileTopbarMenuActive,
    setMobileTopbarMenuActive
  } = useUI()
  const copyTooltipRef = useRef()
  const location = useLocation()

  PrimeReact.ripple = true

  let menuClick = false
  let mobileTopbarMenuClick = false

  useEffect(() => {
    if (mobileMenuActive) {
      addClass(document.body, 'body-overflow-hidden')
    } else {
      removeClass(document.body, 'body-overflow-hidden')
    }
  }, [mobileMenuActive])

  useEffect(() => {
    copyTooltipRef &&
      copyTooltipRef.current &&
      copyTooltipRef.current.updateTargetEvents()
  }, [location])

  const onToggleMenuClick = (event) => {
    menuClick = true

    if (isDesktop()) {
      if (layoutMode === 'overlay') {
        if (mobileMenuActive === true) {
          setOverlayMenuActive(true)
        }

        setOverlayMenuActive((prevState) => !prevState)
        setMobileMenuActive(false)
      } else if (layoutMode === 'static') {
        setStaticMenuInactive((prevState) => !prevState)
      }
    } else {
      setMobileMenuActive((prevState) => !prevState)
    }

    event.preventDefault()
  }

  const onSidebarClick = () => {
    menuClick = true
  }

  const onMobileTopbarMenuClick = (event) => {
    mobileTopbarMenuClick = true

    setMobileTopbarMenuActive((prevState) => !prevState)
    event.preventDefault()
  }

  const onMobileSubTopbarMenuClick = (event) => {
    mobileTopbarMenuClick = true

    event.preventDefault()
  }

  const onMenuItemClick = (event) => {
    if (!event.item.items) {
      setOverlayMenuActive(false)
      setMobileMenuActive(false)
    }
  }
  const isDesktop = () => {
    return window.innerWidth >= 992
  }

  const menu = [
    {
      label: 'Home',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-home',
          to: 'dashboard'
        }
      ]
    },
    {
      label: 'UI Components',
      icon: 'pi pi-fw pi-sitemap',
      items: [
        {
          label: 'Form Layout',
          icon: 'pi pi-fw pi-id-card',
          to: 'formlayout'
        },
        { label: 'Input', icon: 'pi pi-fw pi-check-square', to: 'input' },
        {
          label: 'Float Label',
          icon: 'pi pi-fw pi-bookmark',
          to: 'floatlabel'
        },
        {
          label: 'Invalid State',
          icon: 'pi pi-fw pi-exclamation-circle',
          to: 'invalidstate'
        },
        { label: 'Button', icon: 'pi pi-fw pi-mobile', to: 'button' },
        { label: 'Table', icon: 'pi pi-fw pi-table', to: 'table' },
        { label: 'List', icon: 'pi pi-fw pi-list', to: 'list' },
        { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: 'tree' },
        { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: 'panel' },
        { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: 'overlay' },
        { label: 'Media', icon: 'pi pi-fw pi-image', to: 'media' },
        { label: 'Menu', icon: 'pi pi-fw pi-bars', to: 'menu' },
        { label: 'Message', icon: 'pi pi-fw pi-comment', to: 'messages' },
        { label: 'File', icon: 'pi pi-fw pi-file', to: 'file' },
        { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: 'chart' },
        { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: 'misc' }
      ]
    },
    {
      label: 'UI Blocks',
      items: [
        {
          label: 'Free Blocks',
          icon: 'pi pi-fw pi-eye',
          to: 'blocks',
          badge: 'NEW'
        },
        {
          label: 'All Blocks',
          icon: 'pi pi-fw pi-globe',
          url: 'https://www.primefaces.org/primeblocks-react'
        }
      ]
    },
    {
      label: 'Icons',
      items: [{ label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: 'icons' }]
    },
    {
      label: 'Pages',
      icon: 'pi pi-fw pi-clone',
      items: [
        { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: 'crud' },
        { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: 'timeline' },
        { label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: 'empty' }
      ]
    },
    {
      label: 'Menu Hierarchy',
      icon: 'pi pi-fw pi-search',
      items: [
        {
          label: 'Submenu 1',
          icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 1.1',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
            {
              label: 'Submenu 1.2',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
              ]
            }
          ]
        },
        {
          label: 'Submenu 2',
          icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 2.1',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
            {
              label: 'Submenu 2.2',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Get Started',
      items: [
        {
          label: 'Documentation',
          icon: 'pi pi-fw pi-question',
          command: () => {
            window.location = '#/documentation'
          }
        },
        {
          label: 'View Source',
          icon: 'pi pi-fw pi-search',
          command: () => {
            window.location = 'https://github.com/primefaces/sakai-react'
          }
        }
      ]
    }
  ]

  const addClass = (element, className) => {
    if (element.classList) element.classList.add(className)
    else element.className += ' ' + className
  }

  const removeClass = (element, className) => {
    if (element.classList) element.classList.remove(className)
    else {
      element.className = element.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      )
    }
  }
  return (
    <>
      <AppTopbar
        onToggleMenuClick={onToggleMenuClick}
        layoutColorMode={layoutColorMode}
        mobileTopbarMenuActive={mobileTopbarMenuActive}
        onMobileTopbarMenuClick={onMobileTopbarMenuClick}
        onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick}
      />

      <div className='layout-sidebar' onClick={onSidebarClick}>
        <AppMenu
          model={menu}
          onMenuItemClick={onMenuItemClick}
          layoutColorMode={layoutColorMode}
        />
      </div>

      <div className='layout-main-container'>
        <div className='layout-main'>
          <Outlet />
        </div>

        <AppFooter layoutColorMode={layoutColorMode} />
      </div>
    </>
  )
}

export default LayoutAdmin
