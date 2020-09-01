import Room from "../Room";

export default interface RoomState {
  checkin(room: Room): void;
  checkout(room: Room): void;
  getState(room: Room): void;
}
