import React, { createContext, useContext, useState } from 'react'

export const ConfigContext = createContext()

export const useUI = () => {
  const context = useContext(ConfigContext)
  if (!context) throw new Error('There is no Config provider')
  return context
}

const ConfigProvider = ({ children }) => {
  const [layoutMode, setLayoutMode] = useState('static')
  const [layoutColorMode, setLayoutColorMode] = useState('light')
  const [inputStyle, setInputStyle] = useState('outlined')
  const [ripple, setRipple] = useState(true)
  const [staticMenuInactive, setStaticMenuInactive] = useState(false)
  const [overlayMenuActive, setOverlayMenuActive] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false)

  return (
    <ConfigContext.Provider
      value={{
        layoutMode,
        setLayoutMode,
        setLayoutColorMode,
        layoutColorMode,
        inputStyle,
        setInputStyle,
        ripple,
        setRipple,
        staticMenuInactive,
        setStaticMenuInactive,
        overlayMenuActive,
        setOverlayMenuActive,
        mobileMenuActive,
        setMobileMenuActive,
        mobileTopbarMenuActive,
        setMobileTopbarMenuActive
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}
export default ConfigProvider
