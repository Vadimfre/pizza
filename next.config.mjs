const baseConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const nextConfigFunction = async (phase)=> {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      dest: "public",
      disable: false,
      customWorkerSrc: "service-worker",
      customWorkerDest: "public",
      customWorkerPrefix: "worker",}
    );

    const configWithExport = {
      ...baseConfig,
    };

    return withPWA(configWithExport);
};

export default nextConfigFunction;
