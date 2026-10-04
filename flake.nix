{
  description = "A flake for building vv";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
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
  in {
    packages = forAllSystems (system: let
      pkgs = import nixpkgs { inherit system; };
    in rec {
      default = vv;
      vv = pkgs.stdenv.mkDerivation {
        pname = "vv";
        version = "0.2.0";
        src = self;

        installPhase = ''
          mkdir -p $out/bin $out/share/man/man1
          install -m 0755 vv $out/bin/vv
          if [ -f man/vv.1 ]; then
            install -m 0644 man/vv.1 $out/share/man/man1/vv.1
          fi
        '';
      };
    });
  };
}
