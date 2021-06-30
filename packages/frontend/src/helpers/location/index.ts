export interface Coordinates {
    x: number;
    y: number;
    z: number;
}

export type Localized<T> = Coordinates & T;

export interface Route {
    from: Coordinates;
    to: Coordinates;
}

export function add(...locations: Coordinates[]): Coordinates {
    return locations.reduce(
        (total, {x, y, z}) => ({
            x: total.x + x,
            y: total.y + y,
            z: total.z + z,
        }),
        {x: 0, y: 0, z: 0},
    );
}

export function subtract(...locations: Coordinates[]): Coordinates {
    if (locations.length === 1) return locations[0];
    const [startingPoint, ...others] = locations;

    return others.reduce(
        (total, {x, y, z}) => ({
            x: total.x - x,
            y: total.y - y,
            z: total.z - z,
        }),
        startingPoint,
    );
}