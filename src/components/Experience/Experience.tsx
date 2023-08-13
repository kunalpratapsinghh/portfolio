import { FC } from 'react';

const ExperienceTile: FC<any> = ({ work }) => {
    return (
        <div className="flex flex-col items-center justify-center md:flex-col md:justify-start md:items-start">
            {work.map((text: string, i: number) => (
                <li
                    className="mb-5 mt-3 text-xl text-textDark md:w-4/5"
                    key={i}
                >
                    {text}
                </li>
            ))}
        </div>
    );
};

export default ExperienceTile;
