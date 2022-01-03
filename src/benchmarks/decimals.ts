import { bench, runBenchmarks } from "../devDeps.ts";

bench({
  name: "ToFixed",
  runs: 10_000,
  func(b) {
    b.start();
    +2.99875.toFixed(2);
    b.stop();
  },
});

bench({
  name: "ToFixed",
  runs: 10_000,
  func(b) {
    b.start();
    const formatter = Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
    +formatter.format(2.99875);
    b.stop();
  },
});

runBenchmarks();
