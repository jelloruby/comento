import { atom } from 'recoil';

export const selectedNameState = atom<string>({
    key: 'selectedNameState',
    default: '은비',
});
