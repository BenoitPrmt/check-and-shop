import type {GroceryListColor} from "~/types/grocery";

export const COLORS: {[index: string]: GroceryListColor} = {
    lila: {
        text: 'text-[#f095f0]',
        bg: 'bg-[#f095f0] text-white',
    },
    sun: {
        text: 'text-[#ffa902]',
        bg: 'bg-[#ffa902] text-white',
    },
    ocean: {
        text: 'text-[#007efe]',
        bg: 'bg-[#007efe] text-white',
    },
    tomato: {
        text: 'text-[#f33d38]',
        bg: 'bg-[#f33d38] text-white',
    },
    leaf: {
        text: 'text-[#00d886]',
        bg: 'bg-[#00d886] text-white',
    },
    coal: {
        text: 'text-[#333]',
        bg: 'bg-[#333] text-white',
    }
}