/**
 * General event names that can be reused across products.
 */
export declare enum SharedEventName {
    ANALYTICS_SWITCH_TOGGLED = "Analytics Switch Toggled",
    APP_LOADED = "Application Loaded",
    ELEMENT_CLICKED = "Element Clicked",
    FOOTER_CLICKED = "Footer Clicked",
    HEARTBEAT = "Heartbeat",
    MENU_CLICKED = "Menu Clicked",
    NAVBAR_CLICKED = "Navbar Clicked",
    PAGE_CLICKED = "Page Clicked",
    PAGE_VIEWED = "Page Viewed",
    SEARCH_BAR_CLICKED = "Search Bar Clicked",
    SENTIMENT_SUBMITTED = "Sentiment Submitted",
    TERMS_OF_SERVICE_ACCEPTED = "Terms of Service Accepted",
    WEB_VITALS = "Web Vitals"
}
/**
 * Known events that trigger callbacks.
 * @example
 *  <TraceEvent events={[BrowserEvent.onClick]} element={name}>
 */
export declare enum BrowserEvent {
    onClick = "onClick",
    onFocus = "onFocus",
    onKeyPress = "onKeyPress",
    onSelect = "onSelect"
}
export declare enum Browser {
    BRAVE = "Brave",
    CHROME = "Google Chrome or Chromium",
    EDGE = "Microsoft Edge (Legacy)",
    EDGE_CHROMIUM = "Microsoft Edge (Chromium)",
    FIREFOX = "Mozilla Firefox",
    INTERNET_EXPLORER = "Microsoft Internet Explorer",
    OPERA = "Opera",
    SAFARI = "Apple Safari",
    SAMSUNG = "Samsung Internet",
    UNKNOWN = "unknown"
}
export declare function getBrowser(): string;
//# sourceMappingURL=primitives.d.ts.map