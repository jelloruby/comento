import { atom } from 'recoil';

import { defaultValueList } from '../data';

export const loadingState = atom<boolean>({
    key: 'loadingState',
    default: false,
});

export const valueListState = atom<any>({
    key: 'valueListState',
    default: defaultValueList,
});

export const selectedNameState = atom<string>({
    key: 'selectedNameState',
    default: '은비',
});
