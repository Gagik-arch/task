import React from 'react';
import { BodyType, ChangeEventType } from '@types';

export const validateFields = (query: string[] = [], body: BodyType): boolean => {
    return Object.keys(body).filter((r: string) => query.includes(r)).length < query.length;
};

export const onChangeBody = (e: ChangeEventType, body: BodyType, setBody: React.Dispatch<React.SetStateAction<BodyType>>): void => {
    if (!e.name) {
        return;
    }
    const bodyCopy: BodyType = { ...body };

    if (e.text === '') {
        bodyCopy.hasOwnProperty(e.name) && delete bodyCopy[e.name];
        setBody(bodyCopy);
        return;
    }
    if (e.isValid !== undefined) {
        if (e.isValid) {
            bodyCopy[e.name] = e.text;
        } else {
            delete bodyCopy[e.name];
        }
    } else {
        bodyCopy[e.name] = e.text;
    }

    setBody(bodyCopy);
};

export const onRequiredFieldNotAvailable = (
  formQuery: string[],
  body: BodyType,
  onSchedule: (res: string) => void
) => {
    let result: string[] = [];
    for (let i: number = 0; i < formQuery.length; i++) {
        if (Object.keys(body).includes(formQuery[i])) {
            continue;
        }
        if (onSchedule) {
            onSchedule(formQuery[i]);
        } else {
            result.push(formQuery[i]);
        }
    }
    if (!onSchedule) {
        return result;
    }
};
