import GhostWalk from '../images/ghost_walk.png'
import ColdSnap from '../images/cold_snap.png'
import IceWall from '../images/ice_wall.png'
import EMP from '../images/emp.png'
import Tornado from '../images/tornado.png'
import Alacrity from '../images/alacrity.png'
import SunStrike from '../images/sun_strike.png'
import ForgeSpirit from '../images/forge_spirit.png'
import ChaosMeteor from '../images/chaos_meteor.png'
import DeafeningBlast from '../images/deafening_blast.png'

export const spells = [
  {
    id: 0,
    name: 'Cold Snap',
    buttons: ['qqq'],
    image: ColdSnap
  },
  {
    id: 1,
    name: 'Ghost Walk',
    buttons: ['qqw', 'wqq', 'qwq'],
    image: GhostWalk
  },
  {
    id: 2,
    name: 'Ice Wall',
    buttons: ['qqe', 'eqq', 'qeq'],
    image: IceWall
  },
  {
    id: 3,
    name: 'EMP',
    buttons: ['www'],
    image: EMP
  },
  {
    id: 4,
    name: 'Tornado',
    buttons: ['wwq', 'qww', 'wqw'],
    image: Tornado
  },
  {
    id: 5,
    name: 'Alacrity',
    buttons: ['wwe', 'eww', 'wew'],
    image: Alacrity
  },
  {
    id: 6,
    name: 'Sun Strike',
    buttons: ['eee'],
    image: SunStrike
  },
  {
    id: 7,
    name: 'Forge Spirit',
    buttons: ['eeq', 'qee', 'eqe'],
    image: ForgeSpirit
  },
  {
    id: 8,
    name: 'Chaos Meteor',
    buttons: ['eew', 'wee', 'ewe'],
    image: ChaosMeteor
  },
  {
    id: 9,
    name: 'Deafening Blast',
    buttons: ['qwe', 'qew', 'ewq', 'eqw', 'wqe', 'weq'],
    image: DeafeningBlast
  }
]