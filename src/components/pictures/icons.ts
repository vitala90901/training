import { 
  FaBorderAll,
  FaChartLine,
  FaRegUser,
  FaCcMastercard,
  FaDharmachakra,
  FaExpeditedssl,
  FaHandsHelping,
} from "react-icons/fa";

import { 
  MdOutlineFastfood,
  MdOutlineHealthAndSafety,
  MdOutlineHouse,
  MdOutlineEmojiTransportation,
  MdQuestionMark,
  MdOutlineAttachMoney,
} from "react-icons/md";

import {
  FaArrowTrendDown,
  FaArrowTrendUp,
} from "react-icons/fa6";

export const Icons = {
  Header: {
    Dashboard: FaBorderAll,
    Analytics: FaChartLine,
    Account: FaRegUser,
    Wallet: FaCcMastercard,
    Settings: FaDharmachakra,
    Security: FaExpeditedssl,
    Help: FaHandsHelping,
  },
  Transaction: {
    Food: MdOutlineFastfood,
    Health: MdOutlineHealthAndSafety,
    House: MdOutlineHouse,
    Transport: MdOutlineEmojiTransportation,
    Other: MdQuestionMark,
    Income: MdOutlineAttachMoney,
  },
  Financial: {
    Expense: FaArrowTrendDown,
    Income: FaArrowTrendUp,
  },
};