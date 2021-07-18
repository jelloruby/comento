import { useSetRecoilState, useRecoilState } from 'recoil';
import { query as q } from 'faunadb';
import db from '../../db';

import { loadingState, valueListState } from '../../states';

import Image from '../atoms/Image';

type ImageBoxProps = {
    name: string,
    isSelected: boolean,
    src?: string,
};

const ImageBox = ({
    name,
    isSelected,
    src,
} : ImageBoxProps) => {
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');

    const setLoading = useSetRecoilState(loadingState);
    const [valueList, setValueList] = useRecoilState(valueListState);

    const handleClickToResetValue = async () => {
        if (isSelected) {
            setLoading(true);

            const { data } = await db.query<any>(
                q.Update(ref, {
                    data: {
                        ...valueList,
                        [name]: 0,
                    },
                })
            );
            setValueList(data);

            setLoading(false);
        };
    };

    return (
        <div onClick={handleClickToResetValue}>
            <Image
                className='list_image'
                src={src}
                isSelected={isSelected}
            />
        </div>
    );
};


export default ImageBox;
