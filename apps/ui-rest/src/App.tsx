import { PokemonCard } from 'design-system';
import { Box } from 'design-system';
import { Heading } from 'design-system';
import { Search } from 'design-system';
import { globalStyles } from 'design-system';
import { PokemonType } from 'ui-rest-types';


function App() {
  globalStyles();
  return (
    <Box container>
      <Box css={{ gap: '$3' }}>
        <div>
          <Heading>UFCG Pokedex</Heading>
          <span>Digite o nome do pokemon para começar!</span>
        </div>

        <Search />
      </Box>

      <Box
        css={{
          display: 'grid',
          marginTop: '$4',
          marginRight: 'auto',
          width: '100%',
          '@bp1': {
            gridTemplateColumns: '1fr',
          },
          '@bp2': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(325px, 1fr))',
          },
          gap: '$5',
        }}
      >
        <PokemonCard
          pokemon={{
            id: 1,
            image_url:
              'https://thumbor.clickpb.com.br/Nuh4ggj5XaJGmBQRCf_GqRjzrYI=/876x585/top/smart/www.clickpb.com.br/media/filer_public/87/f0/87f03143-04c7-4b7f-8805-4cbf708537aa/jacare_da_ufcg.jpg',
            info: {
              type: PokemonType.WATER,
            },
            name: 'Jacaré do Laguinho',
            evolutions: [],
          }}
        />
        <PokemonCard
          pokemon={{
            id: 2,
            image_url:
              'data:image/jpeg;base64,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',
            info: {
              type: PokemonType.FIRE,
            },
            name: 'Caramelo',
            evolutions: [{} as any],
          }}
        />
        <PokemonCard
          pokemon={{
            id: 3,
            image_url:
              'https://1.bp.blogspot.com/-jDMKGaz1BrM/XyhEuAJllcI/AAAAAAABWRY/Wuox9Bstw1cOr74iHau47dfxsM3P6E1WgCLcBGAsYHQ/s1600/1.jpg',
            info: {
              type: PokemonType.ELECTRIC,
            },
            name: 'Gatin',
            evolutions: [],
          }}
        />
      </Box>
    </Box>
  );
}

export default App;
