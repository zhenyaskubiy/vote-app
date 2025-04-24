import * as ActionCable from '@rails/actioncable';

export const cable = ActionCable.createConsumer('ws://192.168.1.121:3000/cable');
