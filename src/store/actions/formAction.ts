import { createAction } from '@reduxjs/toolkit';
//import { FormStep } from '../../types/enums/formStep';
//import { ProgressBarPercentage } from '../../types/enums/progressBarPercentage';

export const updateFirstName = createAction<string>('form/updateFirstName');
export const updateLastName = createAction<string>('form/updateLastName');
export const updateReference = createAction<string>('form/updateReference');
export const updateStep = createAction<string>('form/updateStep');