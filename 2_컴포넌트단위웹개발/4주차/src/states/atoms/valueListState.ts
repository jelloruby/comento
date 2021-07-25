import { atom } from 'recoil';

import { defaultValueList } from '../../data';

export const valueListState = atom<any>({
    key: 'valueListState',
    default: defaultValueList,
});
