import { ContactSupportOutlined } from '@material-ui/icons';
import { ipcMain } from 'electron';
import { Inventory } from '../api/types';
import { IpcEvents } from '../ipc-events';
import { defaultProject } from './workspace/ProjectTree';

ipcMain.handle(IpcEvents.INVENTORY_GET_ALL, async (event, invget: Partial<Inventory>) => {
  let inv: any;
  try {
    inv = await defaultProject.scans_db.inventories.getAll(invget);
    return { status: 'ok', message: inv, data: inv };
  } catch (e) {
    console.log('Catch an error: ', e);
    return { status: 'fail' };
  }
});

ipcMain.handle(IpcEvents.INVENTORY_GET, async (event, invget: Partial<Inventory>) => {
  let inv: any;
  try {
    inv = await defaultProject.scans_db.inventories.get(invget);
    return { status: 'ok', message: 'Inventory retrieve successfully', data: inv };
  } catch (e) {
    console.log('Catch an error: ', e);
    return { status: 'fail' };
  }
});

ipcMain.handle(IpcEvents.INVENTORY_CREATE, async (event, arg: Inventory) => {
  let inv: any;
  try {
    inv = await defaultProject.scans_db.inventories.create(arg);
    arg.id = inv.id;
    return { status: 'ok', message: 'Inventory created', data: inv };
  } catch (e) {
    console.log('Catch an error on inventory: ', e);
    return { status: 'fail' };
  }
});

ipcMain.handle(IpcEvents.INVENTORY_ATTACH_FILE, async (event, arg: Partial<Inventory>) => {
  try {
    const success = await defaultProject.scans_db.inventories.attachFileInventory(arg);
    return { status: 'ok', message: 'File attached to inventory successfully', success };
  } catch (e) {
    console.log('Catch an error on inventory: ', e);
    return { status: 'fail' };
  }
});

ipcMain.handle(IpcEvents.INVENTORY_DETACH_FILE, async (event, arg: Partial<Inventory>) => {
  try {
    const success = await defaultProject.scans_db.inventories.detachFileInventory(arg);
    return { status: 'ok', message: 'File detached to inventory successfully', success };
  } catch (e) {
    console.log('Catch an error on inventory: ', e);
    return { status: 'fail' };
  }
});

ipcMain.handle(IpcEvents.INVENTORY_DELETE, async (event, arg: Partial<Inventory>) => {
  try {
    const success = await defaultProject.scans_db.inventories.delete(arg);
    if (success) return { status: 'ok', message: 'Inventory deleted successfully', success };
    return { status: 'error', message: 'Inventory was not deleted successfully', success };
  } catch (e) {
    console.log('Catch an error on inventory: ', e);
    return { status: 'fail' };
  }
});
