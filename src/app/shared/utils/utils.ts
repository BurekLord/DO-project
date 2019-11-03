export function getClassFromSize(size: string): string {
    let splitSize: any = size.split('|');
    splitSize = `col-lg-${splitSize[0]} col-md-${splitSize[1]} col-sm-${splitSize[2]}`;
    return splitSize;
}
