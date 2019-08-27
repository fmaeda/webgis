export function swap<T>(
  arr: T[],
  sourceIdx: number,
  destinationIdx: number,
): T[] {
  const copyArr = [...arr];
  const element = copyArr[sourceIdx];
  copyArr.splice(sourceIdx, 1);
  copyArr.splice(destinationIdx, 0, element);
  return copyArr;
}
