export const SHORTCUT_CHANNEL = {
  BACK: 'BACK',
  BOOKMARK: 'BOOKMARK',
  DELETE_ALL: 'DELETE_ALL',
  DELETE_CACHE: 'DELETE_CACHE',
  DELETE_COOKIES: 'DELETE_COOKIES',
  DELETE_STORAGE: 'DELETE_STORAGE',
  EDIT_URL: 'EDIT_URL',
  FORWARD: 'FORWARD',
  INSPECT_ELEMENTS: 'INSPECT_ELEMENTS',
  PREVIEW_LAYOUT: 'PREVIEW_LAYOUT',
  RELOAD: 'RELOAD',
  ROTATE_ALL: 'ROTATE_ALL',
  SCREENSHOT_ALL: 'SCREENSHOT_ALL',
  THEME: 'THEME',
  TOGGLE_RULERS: 'TOGGLE_RULERS',
  ZOOM_IN: 'ZOOM_IN',
  ZOOM_OUT: 'ZOOM_OUT',
} as const;

export type ShortcutChannel =
  typeof SHORTCUT_CHANNEL[keyof typeof SHORTCUT_CHANNEL];

export const SHORTCUT_KEYS: { [key in ShortcutChannel]: string[] } = {
  [SHORTCUT_CHANNEL.BACK]: ['alt+left'],
  [SHORTCUT_CHANNEL.BOOKMARK]: ['mod+d'],
  [SHORTCUT_CHANNEL.DELETE_ALL]: ['mod+alt+del', 'mod+alt+backspace'],
  [SHORTCUT_CHANNEL.DELETE_CACHE]: ['mod+alt+z'],
  [SHORTCUT_CHANNEL.DELETE_COOKIES]: ['mod+alt+a'],
  [SHORTCUT_CHANNEL.DELETE_STORAGE]: ['mod+alt+q'],
  [SHORTCUT_CHANNEL.EDIT_URL]: ['mod+l'],
  [SHORTCUT_CHANNEL.FORWARD]: ['alt+right'],
  [SHORTCUT_CHANNEL.INSPECT_ELEMENTS]: ['mod+i'],
  [SHORTCUT_CHANNEL.PREVIEW_LAYOUT]: ['mod+shift+l'],
  [SHORTCUT_CHANNEL.RELOAD]: ['mod+r'],
  [SHORTCUT_CHANNEL.ROTATE_ALL]: ['mod+alt+r'],
  [SHORTCUT_CHANNEL.SCREENSHOT_ALL]: ['mod+s'],
  [SHORTCUT_CHANNEL.THEME]: ['mod+t'],
  [SHORTCUT_CHANNEL.TOGGLE_RULERS]: ['alt+r'],
  [SHORTCUT_CHANNEL.ZOOM_IN]: ['mod+=', 'mod++', 'mod+shift+='],
  [SHORTCUT_CHANNEL.ZOOM_OUT]: ['mod+-'],
};