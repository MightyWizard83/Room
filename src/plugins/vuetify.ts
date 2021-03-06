import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import colours from '@/assets/scss/_variables.scss'
import { DashedLine, NormalLine, TBarHead, DashedLineActive, NormalLineActive, TBarHeadActive } from '@/assets/tool-icons'

import Vuetify, {
  VApp,
  VRadio,
  VRadioGroup,
  VAutocomplete,
  VBadge,
  VRow,
  VImg,
  VSwitch,
  VDivider,
  VToolbar,
  VItemGroup,
  VContainer,
  VSpacer,
  VBtn,
  VIcon,
  VCardSubtitle,
  VTooltip,
  VCol,
  VBtnToggle,
  VMenu,
  VList,
  VListItem,
  VListItemAction,
  VListItemAvatar,
  VListItemContent,
  VListItemTitle,
  VListItemIcon,
  VSubheader,
  VContent,
  VCard,
  VCardActions,
  VSheet,
  VColorPicker,
  VSlider,
  VSelect,
  VNavigationDrawer,
  VTextField,
  VChipGroup,
  VChip,
  VSkeletonLoader
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VRadioGroup,
    VSwitch,
    VRadio,
    VContainer,
    VAutocomplete,
    VBadge,
    VRow,
    VImg,
    VTooltip,
    VDivider,
    VToolbar,
    VItemGroup,
    VCardSubtitle,
    VSpacer,
    VBtn,
    VIcon,
    VCol,
    VBtnToggle,
    VMenu,
    VList,
    VListItem,
    VListItemAction,
    VListItemAvatar,
    VListItemContent,
    VListItemTitle,
    VListItemIcon,
    VContent,
    VSubheader,
    VCard,
    VCardActions,
    VSheet,
    VColorPicker,
    VSlider,
    VSelect,
    VNavigationDrawer,
    VTextField,
    VChipGroup,
    VChip,
    VSkeletonLoader
  },
  directives: { }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const opts: Record<string, any> = {
  icons: {
    values: {
      dashedLine: {
        component: DashedLine
      },
      normalLine: {
        component: NormalLine
      },
      tBarHead: {
        component: TBarHead
      },
      dashedLineActive: {
        component: DashedLineActive
      },
      normalLineActive: {
        component: NormalLineActive
      },
      tBarHeadActive: {
        component: TBarHeadActive
      }
    },
    iconfont: 'fa' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4',
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: colours.roomPrimary
      }
    }
  }
}

export default new Vuetify(opts)
