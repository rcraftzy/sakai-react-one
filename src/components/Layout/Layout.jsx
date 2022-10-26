import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { AppConfig } from '@/AppConfig'
import PrimeReact from 'primereact/api'
import { Tooltip } from 'primereact/tooltip'
import { useUI } from '@/context/ConfigProvider/ConfigProvider'

const Layout = () => {
  const {
    layoutMode,
    setLayoutMode,
    layoutColorMode,
    inputStyle,
    setInputStyle,
    ripple,
    setRipple,
    staticMenuInactive,
    overlayMenuActive,
    setOverlayMenuActive,
    mobileMenuActive,
    setMobileMenuActive,
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

  const onInputStyleChange = (inputStyle) => {
    setInputStyle(inputStyle)
  }

  const onRipple = (e) => {
    PrimeReact.ripple = e.value
    setRipple(e.value)
  }

  const onLayoutModeChange = (mode) => {
    setLayoutMode(mode)
  }

  const onWrapperClick = () => {
    if (!menuClick) {
      setOverlayMenuActive(false)
      setMobileMenuActive(false)
    }

    if (!mobileTopbarMenuClick) {
      setMobileTopbarMenuActive(false)
    }

    mobileTopbarMenuClick = false
    menuClick = false
  }

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

  const wrapperClass = classNames('layout-wrapper', {
    'layout-overlay': layoutMode === 'overlay',
    'layout-static': layoutMode === 'static',
    'layout-static-sidebar-inactive':
      staticMenuInactive && layoutMode === 'static',
    'layout-overlay-sidebar-active':
      overlayMenuActive && layoutMode === 'overlay',
    'layout-mobile-sidebar-active': mobileMenuActive,
    'p-input-filled': inputStyle === 'filled',
    'p-ripple-disabled': ripple === false,
    'layout-theme-light': layoutColorMode === 'light'
  })

  return (
    <div className={wrapperClass} onClick={onWrapperClick}>
      <Tooltip
        ref={copyTooltipRef}
        target='.block-action-copy'
        position='bottom'
        content='Copied to clipboard'
        event='focus'
      />

      <Outlet />

      <AppConfig
        rippleEffect={ripple}
        onRippleEffect={onRipple}
        inputStyle={inputStyle}
        onInputStyleChange={onInputStyleChange}
        layoutMode={layoutMode}
        onLayoutModeChange={onLayoutModeChange}
        layoutColorMode={layoutColorMode}
      />

      <CSSTransition
        classNames='layout-mask'
        timeout={{ enter: 200, exit: 200 }}
        in={mobileMenuActive}
        unmountOnExit
      >
        <div className='layout-mask p-component-overlay' />
      </CSSTransition>
    </div>
  )
}

export default Layout
