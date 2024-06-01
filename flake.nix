{
  description = "A flake for building vv";

  inputs.nixpkgs.url = github:NixOS/nixpkgs/nixos-23.11;
  inputs.nixpkgs-unstable.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = {
    self,
    nixpkgs,
    nixpkgs-unstable
  }: let
    systems = [
      "x86_64-linux"
      "x86_64-darwin"
      "aarch64-darwin"
      "aarch64-linux"
    ];
    forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f system);
    suffix-version = version: attrs: nixpkgs.lib.mapAttrs' (name: value: nixpkgs.lib.nameValuePair (name + version) value) attrs;
    suffix-stable = suffix-version "-24_05";
  in {
    packages.x86_64-linux.default = self.packages.x86_64-linux.vv;
    packages.x86_64-linux.vv =
      # Notice the reference to nixpkgs here.
      with import nixpkgs { system = "x86_64-linux"; };
      stdenv.mkDerivation {
        name = "vv";
        src = self;
        installPhase = "TMP=$(mktemp -d) && cp vv $TMP/vv && chmod 555 $TMP/vv && mkdir -p $out/bin && install -t $out/bin $TMP/vv";
      };
  };
}
