import type { TransformOptions } from "babel-core";

type ConfigFunctionAPI = {
    version: string;
    cache: {
        (bool: boolean): void;
        forever: () => void;
        never: () => void;
        using: (env: () => typeof process.env.NODE_ENV) => void;
        invalidate: (env: () => typeof process.env.NODE_ENV) => void;
    };
};

export default (api: ConfigFunctionAPI): TransformOptions => {
    api.cache(true);

    return {
        presets: [
            "babel-preset-expo",
            [
                "@babel/preset-env",
                {
                    loose: true,
                }
            ],
        ],
    };
};
