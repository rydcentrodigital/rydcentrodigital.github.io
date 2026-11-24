import { ProductRepositoryPort } from '../../application/ports/ProductRepositoryPort.js';
import { Product } from '../../domain/models/Product.js';

const RAW_CATALOG = [
    // ==================== GORRAS (Págs. 2 - 14) ====================
    {
        id: 'gorra-st85',
        code: 'ST-85',
        category: 'Gorras',
        svgType: 'cap-5panel',
        name: 'Gorras ST-85 Microfibra 5 Paneles',
        fabric: 'Microfibra',
        tags: ['Microfibra'],
        description: 'Gorra ligera de microfibra de 5 paneles con frente limpio ideal para bordado frontal o estampado.',
        sizes: ['Talla Única (Cierre Ajustable)'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Khaki', primary: '#D2C29D' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Gris', primary: '#9CA3AF' }
        ]
    },
    {
        id: 'gorra-malla-84',
        code: 'ESTILO 84',
        category: 'Gorras',
        svgType: 'cap-mesh',
        name: 'Gorras con Malla Estilo 84',
        fabric: 'Malla Transpirable',
        tags: ['Microfibra'],
        description: 'Gorra fresca con paneles traseros en malla ventilada y cierre ajustable.',
        sizes: ['Talla Única (Cierre Ajustable)'],
        colors: [
            { name: 'Negro', primary: '#18191B', secondary: '#27272A' },
            { name: 'Azul Marino', primary: '#17223B', secondary: '#1E293B' },
            { name: 'Rojo', primary: '#C81E1E', secondary: '#991B1B' },
            { name: 'Azul Royal', primary: '#1D4ED8', secondary: '#1E40AF' },
            { name: 'Blanco', primary: '#FFFFFF', secondary: '#E5E7EB' },
            { name: 'Gris', primary: '#9CA3AF', secondary: '#6B7280' }
        ]
    },
    {
        id: 'gorra-st83',
        code: 'ST-83',
        category: 'Gorras',
        svgType: 'cap-perforated',
        name: 'Gorras ST-83 Premium Agujeros',
        fabric: 'Microfibra Perforada',
        tags: ['Microfibra'],
        description: 'Gorra de microfibra de 6 paneles con perforaciones láser laterales y traseras de alta transpirabilidad.',
        sizes: ['Talla Única (Cierre Velcro Ajustable)'],
        colors: [
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Khaki', primary: '#D2C29D' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Gris', primary: '#9CA3AF' }
        ]
    },
    {
        id: 'gorra-ojo-angel-malla',
        code: 'OAM-04',
        category: 'Gorras',
        svgType: 'cap-mesh',
        name: 'Gorras Ojo de Ángel y Malla',
        fabric: 'Ojo de Ángel / Malla',
        tags: ['Dry Fit'],
        description: 'Gorra con frente deportivo en tela Ojo de Ángel, malla detrás y cierre de botones ajustable.',
        sizes: ['Talla Única (Cierre Botones)'],
        colors: [
            { name: 'Negro', primary: '#18191B', secondary: '#27272A' },
            { name: 'Azul Marino', primary: '#17223B', secondary: '#1E293B' },
            { name: 'Blanco', primary: '#FFFFFF', secondary: '#E5E7EB' },
            { name: 'Rojo', primary: '#C81E1E', secondary: '#991B1B' },
            { name: 'Azul Royal', primary: '#1D4ED8', secondary: '#1E40AF' }
        ]
    },
    {
        id: 'gorra-bulld强化',
        code: 'BD-06',
        category: 'Gorras',
        svgType: 'cap-6panel',
        name: 'Gorras Bulldenim Reforzadas',
        fabric: 'Bulldenim 100% Algodón',
        tags: ['100% Algodón'],
        description: 'Gorra estructurada de 6 paneles en tela Bulldenim resistente con cierre en velcro ajustable. 17 colores.',
        sizes: ['Talla Única (Cierre Velcro)'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Naranja', primary: '#EA580C' },
            { name: 'Azul Turquesa', primary: '#0284C7' },
            { name: 'Morado', primary: '#4C1D95' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Azul Cielo', primary: '#7DD3FC' },
            { name: 'Khaki Claro', primary: '#E0D4B7' },
            { name: 'Amarillo Oro', primary: '#EAB308' },
            { name: 'Rojo Vino', primary: '#6B141A' },
            { name: 'Verde Kelly', primary: '#15803D' },
            { name: 'Verde Hunter', primary: '#143322' },
            { name: 'Rosado', primary: '#F472B6' },
            { name: 'Verde Manzana', primary: '#84CC16' }
        ]
    },
    {
        id: 'gorra-dryfit',
        code: 'DF-06',
        category: 'Gorras',
        svgType: 'cap-6panel',
        name: 'Gorras Dry Fit Deportivas',
        fabric: 'Poliéster Dry Fit',
        tags: ['Dry Fit'],
        description: 'Gorras deportivas Dry Fit de 6 paneles de secado rápido con cierre de hebilla ajustable.',
        sizes: ['Talla Única (Cierre Hebilla)'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Rosado', primary: '#F472B6' },
            { name: 'Amarillo Neón', primary: '#D9F99D' },
            { name: 'Naranja Neón', primary: '#FF5E1A' },
            { name: 'Verde Manzana', primary: '#84CC16' }
        ]
    },
    {
        id: 'gorra-ojo-angel',
        code: 'OA-06',
        category: 'Gorras',
        svgType: 'cap-6panel',
        name: 'Gorras Ojo de Ángel',
        fabric: 'Tela Ojo de Ángel',
        tags: ['Dry Fit'],
        description: 'Gorras de 6 paneles confeccionadas íntegramente en tela Ojo de Ángel con cierre en velcro ajustable.',
        sizes: ['Talla Única (Cierre Velcro)'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' }
        ]
    },
    {
        id: 'gorra-combinada',
        code: 'COMB-06',
        category: 'Gorras',
        svgType: 'cap-combo',
        name: 'Gorras Combinadas Bulldenim',
        fabric: 'Bulldenim Bicolor',
        tags: ['100% Algodón'],
        description: 'Gorra de 6 paneles en Bulldenim con media luna contraste en la visera y cierre ajustable.',
        sizes: ['Talla Única (Cierre Ajustable)'],
        colors: [
            { name: 'Blanco / Azul Royal', primary: '#FFFFFF', visor: '#1D4ED8' },
            { name: 'Blanco / Rojo', primary: '#FFFFFF', visor: '#C81E1E' },
            { name: 'Blanco / Azul Marino', primary: '#FFFFFF', visor: '#17223B' },
            { name: 'Rojo / Blanco', primary: '#C81E1E', visor: '#FFFFFF' },
            { name: 'Azul Royal / Blanco', primary: '#1D4ED8', visor: '#FFFFFF' },
            { name: 'Khaki / Blanco', primary: '#D2C29D', visor: '#FFFFFF' },
            { name: 'Azul Marino / Blanco', primary: '#17223B', visor: '#FFFFFF' },
            { name: 'Negro / Blanco', primary: '#18191B', visor: '#FFFFFF' },
            { name: 'Negro / Rojo', primary: '#18191B', visor: '#C81E1E' },
            { name: 'Negro / Naranja', primary: '#18191B', visor: '#EA580C' },
            { name: 'Negro / Amarillo', primary: '#18191B', visor: '#EAB308' },
            { name: 'Morado / Amarillo', primary: '#4C1D95', visor: '#EAB308' }
        ]
    },
    {
        id: 'gorra-malla-foam',
        code: 'TRUCKER-FM',
        category: 'Gorras',
        svgType: 'cap-trucker',
        name: 'Gorras de Malla y Foam (Trucker)',
        fabric: 'Foam Acolchado + Malla',
        tags: ['Microfibra'],
        description: 'Gorras estilo Trucker con frente acolchado en foam (ideal para sublimación y parches), malla trasera y cierre de botones.',
        sizes: ['Talla Única (Cierre Botones)'],
        colors: [
            { name: 'Azul Royal / Blanco', primary: '#1D4ED8', front: '#FFFFFF' },
            { name: 'Rojo / Blanco', primary: '#C81E1E', front: '#FFFFFF' },
            { name: 'Azul Marino / Blanco', primary: '#17223B', front: '#FFFFFF' },
            { name: 'Verde Kelly / Blanco', primary: '#15803D', front: '#FFFFFF' },
            { name: 'Verde Neón / Blanco', primary: '#4ADE80', front: '#FFFFFF' },
            { name: 'Amarillo Neón / Blanco', primary: '#D9F99D', front: '#FFFFFF' },
            { name: 'Amarillo Oro / Blanco', primary: '#EAB308', front: '#FFFFFF' },
            { name: 'Naranja Neón / Blanco', primary: '#FF5E1A', front: '#FFFFFF' },
            { name: 'Fucsia / Blanco', primary: '#DB2777', front: '#FFFFFF' },
            { name: 'Rosado Claro / Blanco', primary: '#F9A8D4', front: '#FFFFFF' },
            { name: 'Amarillo / Morado', primary: '#EAB308', front: '#4C1D95' },
            { name: 'Morada Entera', primary: '#4C1D95', front: '#4C1D95' },
            { name: 'Blanca Entera', primary: '#FFFFFF', front: '#FFFFFF' },
            { name: 'Negra Entera', primary: '#18191B', front: '#18191B' },
            { name: 'Roja Entera', primary: '#C81E1E', front: '#C81E1E' },
            { name: 'Azul Royal Entera', primary: '#1D4ED8', front: '#1D4ED8' }
        ]
    },
    {
        id: 'gorra-gap-drill',
        code: 'GAP-DRILL',
        category: 'Gorras',
        svgType: 'cap-6panel',
        name: 'Gorras Tipo GAP en Tela Drill',
        fabric: 'Tela Suave de Drill',
        tags: ['100% Algodón'],
        description: 'Gorra casual de 6 paneles en tela suave de Drill con cierre en hebilla metálica ajustable.',
        sizes: ['Talla Única (Hebilla Ajustable)'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Khaki', primary: '#D2C29D' },
            { name: 'Rosado Claro', primary: '#F9A8D4' },
            { name: 'Rosado Fucsia', primary: '#DB2777' },
            { name: 'Azul Cielo', primary: '#7DD3FC' },
            { name: 'Verde Jade', primary: '#0D9488' },
            { name: 'Verde Neón', primary: '#4ADE80' },
            { name: 'Amarillo Claro', primary: '#FEF3C7' },
            { name: 'Amarillo Oro', primary: '#EAB308' },
            { name: 'Mostaza', primary: '#B45309' },
            { name: 'Rojo Vino', primary: '#6B141A' }
        ]
    },
    {
        id: 'gorra-st72-st73',
        code: 'ST-72 / ST-73',
        category: 'Gorras',
        svgType: 'cap-6panel',
        name: 'Gorras Microfibra Premium ST-72 y ST-73',
        fabric: 'Microfibra Premium',
        tags: ['Microfibra'],
        description: 'Gorra de microfibra premium de 6 paneles. Modelo ST-72 con cierre en hebilla de plástico y ST-73 con velcro ajustable.',
        sizes: ['ST-72 (Hebilla Plástica)', 'ST-73 (Velcro Ajustable)'],
        colors: [
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Blanco', primary: '#FFFFFF' }
        ]
    },

    // ==================== POLOSHIRTS (Págs. 15 - 25) ====================
    {
        id: 'polo-combinado-waffle',
        code: 'POLO-WD-COMB',
        category: 'Poloshirts',
        svgType: 'polo-trim',
        name: 'Polos Combinados Waffle Dry',
        fabric: '100% Poliéster Waffle Dry',
        tags: ['Dry Fit'],
        description: 'Poloshirt deportivo en tejido Waffle Dry con ribetes contraste en cuello y mangas para uniformes modernos.',
        sizes: ['16', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Azul Royal', primary: '#1D4ED8', trim: '#FFFFFF' },
            { name: 'Azul Marino', primary: '#17223B', trim: '#FFFFFF' },
            { name: 'Blanco', primary: '#FFFFFF', trim: '#17223B' },
            { name: 'Negro', primary: '#18191B', trim: '#FFFFFF' },
            { name: 'Amarillo Oro', primary: '#EAB308', trim: '#18191B' },
            { name: 'Gris', primary: '#9CA3AF', trim: '#18191B' },
            { name: 'Rojo', primary: '#C81E1E', trim: '#FFFFFF' },
            { name: 'Rojo Vino', primary: '#6B141A', trim: '#FFFFFF' },
            { name: 'Azul Cielo', primary: '#7DD3FC', trim: '#17223B' },
            { name: 'Khaki', primary: '#D2C29D', trim: '#18191B' },
            { name: 'Rosado Claro', primary: '#F9A8D4', trim: '#FFFFFF' },
            { name: 'Rosado Fucsia', primary: '#DB2777', trim: '#FFFFFF' },
            { name: 'Verde Kelly', primary: '#15803D', trim: '#FFFFFF' },
            { name: 'Verde Manzana', primary: '#84CC16', trim: '#18191B' },
            { name: 'Morado Lila', primary: '#8B7EC8', trim: '#FFFFFF' },
            { name: 'Naranja', primary: '#EA580C', trim: '#FFFFFF' },
            { name: 'Azul Turquesa', primary: '#0284C7', trim: '#FFFFFF' }
        ]
    },
    {
        id: 'polo-columbia-waffle',
        code: 'POLO-COL-WD',
        category: 'Poloshirts',
        svgType: 'polo-columbia',
        name: 'Poloshirt Tipo Columbia Waffle Dry',
        fabric: '100% Poliéster Tejido Waffle',
        tags: ['Dry Fit', 'Tipo Columbia'],
        description: 'Poloshirt técnico tipo Columbia 100% poliéster en tejido Waffle con ventilación trasera ideal para trabajo de campo.',
        sizes: ['X Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Gris', primary: '#9CA3AF' }
        ]
    },
    {
        id: 'polo-pique-6040',
        code: 'POLO-PIQ-6040',
        category: 'Poloshirts',
        svgType: 'polo',
        name: 'Poloshirt en Piqué 60% Algodón / 40% Poliéster',
        fabric: 'Piqué 60% Algodón / 40% Poliéster',
        tags: ['100% Algodón'],
        description: 'Poloshirt clásico con cuello tejido en Piqué, mezcla 60% algodón y 40% poliéster con pechera de 3 botones.',
        sizes: ['14', '16', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Rosado Claro', primary: '#F9A8D4' },
            { name: 'Rosado Fucsia', primary: '#DB2777' },
            { name: 'Azul Cielo', primary: '#7DD3FC' },
            { name: 'Verde Manzana', primary: '#84CC16' },
            { name: 'Amarillo Oro', primary: '#EAB308' },
            { name: 'Naranja', primary: '#EA580C' },
            { name: 'Verde Kelly', primary: '#15803D' },
            { name: 'Khaki', primary: '#D2C29D' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Azul Turquesa', primary: '#0284C7' }
        ]
    },
    {
        id: 'polo-escolar',
        code: 'POLO-ESC',
        category: 'Poloshirts',
        svgType: 'polo',
        name: 'Polo Escolar Piqué',
        fabric: 'Piqué 60% Algodón / 40% Poliéster',
        tags: ['Escolar', '100% Algodón'],
        description: 'Poloshirt escolar con cuello en Piqué resistente al lavado diario. Disponible desde talla 2 infantil hasta XL.',
        sizes: ['2', '4', '6', '8', '10', '12', '14', '16', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Azul Cielo', primary: '#7DD3FC' }
        ]
    },
    {
        id: 'polo-ojo-angel',
        code: 'POLO-OA',
        category: 'Poloshirts',
        svgType: 'polo',
        name: 'Poloshirt en Ojo de Ángel',
        fabric: '100% Poliéster Tela Ojo de Ángel',
        tags: ['Dry Fit'],
        description: 'Poloshirt con cuello 100% poliéster en tela microperforada Ojo de Ángel con 3 botones. 16 colores.',
        sizes: ['16', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Khaki', primary: '#D2C29D' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Verde Jade', primary: '#0D9488' },
            { name: 'Rosado Fucsia', primary: '#DB2777' },
            { name: 'Azul Cielo', primary: '#7DD3FC' },
            { name: 'Verde Manzana', primary: '#84CC16' },
            { name: 'Amarillo Oro', primary: '#EAB308' },
            { name: 'Naranja', primary: '#EA580C' },
            { name: 'Verde Kelly', primary: '#15803D' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Azul Turquesa', primary: '#0284C7' },
            { name: 'Morado', primary: '#4C1D95' }
        ]
    },
    {
        id: 'polo-dryfit-waffle',
        code: 'POLO-DF',
        category: 'Poloshirts',
        svgType: 'polo',
        name: 'Poloshirt Dry Fit / Waffle Dry',
        fabric: '100% Poliéster Dry Fit',
        tags: ['Dry Fit'],
        description: 'Poloshirt con cuello 100% poliéster de secado rápido y 3 botones, perfecto para uniformes corporativos y deportivos.',
        sizes: ['16', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Amarillo Oro', primary: '#EAB308' },
            { name: 'Naranja', primary: '#EA580C' },
            { name: 'Verde Kelly', primary: '#15803D' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Azul Turquesa', primary: '#0284C7' },
            { name: 'Azul Cielo', primary: '#7DD3FC' }
        ]
    },
    {
        id: 'polo-algodon-100',
        code: 'POLO-100ALG',
        category: 'Poloshirts',
        svgType: 'polo',
        name: 'Poloshirt 100% Algodón (Hombre, Mujer y Niños)',
        fabric: '100% Algodón',
        tags: ['100% Algodón', 'Escolar'],
        description: 'Poloshirt suave 100% algodón disponible en corte Caballero, corte entallado Mujer y tallas infantiles.',
        sizes: ['Corte Hombre (16 a XXL)', 'Corte Mujer (16 a XXL)', 'Niña/os (2 a 16)', 'Small', 'Medium', 'Large', 'XL', 'XXL'],
        colors: [
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Rosado Fucsia', primary: '#DB2777' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Azul Cielo', primary: '#7DD3FC' },
            { name: 'Verde Kelly', primary: '#15803D' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Khaki', primary: '#D2C29D' },
            { name: 'Rosado Claro', primary: '#F9A8D4' }
        ]
    },

    // ==================== CAMISETAS (Págs. 26 - 39) ====================
    {
        id: 'camiseta-dryfit-oa',
        code: 'CAM-DF-OA',
        category: 'Camisetas',
        svgType: 'tshirt',
        name: 'Camiseta Dry Fit en Ojo de Ángel',
        fabric: '100% Poliéster Cool Dry Ojo de Ángel',
        tags: ['Dry Fit'],
        description: 'Camiseta deportiva 100% poliéster Cool Dry en tela Ojo de Ángel. Disponible en 17 colores para adultos y 7 colores para niños.',
        sizes: ['Niños (2 a 14)', 'X Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Verde Jade', primary: '#0D9488' },
            { name: 'Rosado Fucsia', primary: '#DB2777' },
            { name: 'Azul Cielo', primary: '#7DD3FC' },
            { name: 'Verde Manzana', primary: '#84CC16' },
            { name: 'Amarillo Oro', primary: '#EAB308' },
            { name: 'Naranja', primary: '#EA580C' },
            { name: 'Verde Kelly', primary: '#15803D' },
            { name: 'Rosa Lumínico', primary: '#E11D48' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Azul Turquesa', primary: '#0284C7' },
            { name: 'Amarillo Lumínico', primary: '#D4E11E' },
            { name: 'Morado Lila', primary: '#8B7EC8' }
        ]
    },
    {
        id: 'camiseta-dryfit-ml',
        code: 'CAM-DF-ML',
        category: 'Camisetas',
        svgType: 'longsleeve',
        name: 'Camiseta Dry Fit Manga Larga',
        fabric: '100% Poliéster Dry Fit',
        tags: ['Dry Fit'],
        description: 'Camiseta manga larga 100% poliéster ideal para actividades al aire libre, pesca, construcción y deportes.',
        sizes: ['16', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Azul Cielo', primary: '#7DD3FC' },
            { name: 'Gris', primary: '#9CA3AF' }
        ]
    },
    {
        id: 'playera-uv-ninos',
        code: 'CAM-UV-KID',
        category: 'Camisetas',
        svgType: 'longsleeve',
        name: 'Playera Dry Fit Manga Larga Niños (Protección UV)',
        fabric: 'Poliéster Dry Fit con Protección UV',
        tags: ['Dry Fit', 'Escolar'],
        description: 'Playera manga larga con protección solar UV para niños, ideal para sublimación full color.',
        sizes: ['2', '4', '6', '8', '10', '12', '14'],
        colors: [
            { name: 'Blanco', primary: '#FFFFFF' }
        ]
    },
    {
        id: 'camiseta-dryfit-capucha',
        code: 'CAM-DF-HOOD',
        category: 'Camisetas',
        svgType: 'hoodie-light',
        name: 'Camiseta Dry Fit Manga Larga con Capucha',
        fabric: '100% Poliéster Dry Fit Ligero',
        tags: ['Dry Fit'],
        description: 'Camiseta manga larga ligera con capucha protectora. Disponible para adultos y niños.',
        sizes: ['Niños (2 a 14)', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Azul Turquesa', primary: '#0284C7' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Naranja', primary: '#EA580C' }
        ]
    },
    {
        id: 'camiseta-cuello-v-df',
        code: 'CAM-V-DF',
        category: 'Camisetas',
        svgType: 'tshirt-v',
        name: 'Camiseta Dry Fit Ojo de Ángel Cuello V',
        fabric: '100% Poliéster Cool Dry Ojo de Ángel',
        tags: ['Dry Fit'],
        description: 'Camiseta cuello V deportivo en tela transpirable Ojo de Ángel.',
        sizes: ['X Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Amarillo Oro', primary: '#EAB308' }
        ]
    },
    {
        id: 'camiseta-cuello-v-alg',
        code: 'CAM-V-ALG',
        category: 'Camisetas',
        svgType: 'tshirt-v',
        name: 'Camiseta Cuello V 100% Algodón',
        fabric: '100% Algodón',
        tags: ['100% Algodón'],
        description: 'Camiseta casual cuello V confeccionada en 100% algodón suave.',
        sizes: ['Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Gris', primary: '#9CA3AF' }
        ]
    },
    {
        id: 'camiseta-cuello-redondo',
        code: 'CAM-CR-100',
        category: 'Camisetas',
        svgType: 'tshirt',
        name: 'Camiseta Cuello Redondo 100% Algodón (Adultos y Niños)',
        fabric: '100% Algodón',
        tags: ['100% Algodón', 'Escolar'],
        description: 'Nuestra camiseta estrella cuello redondo 100% algodón con paleta extendida de 29 colores incluyendo tonos lumínicos.',
        sizes: ['Niños (2 a 16)', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Cielo', primary: '#7DD3FC' },
            { name: 'Azul Turquesa', primary: '#0284C7' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Verde Kelly', primary: '#15803D' },
            { name: 'Verde Hunter', primary: '#143322' },
            { name: 'Verde Olivo', primary: '#556B2F' },
            { name: 'Verde Manzana', primary: '#84CC16' },
            { name: 'Verde Jade', primary: '#0D9488' },
            { name: 'Amarillo Oro', primary: '#EAB308' },
            { name: 'Naranja', primary: '#EA580C' },
            { name: 'Amarillo Pollito', primary: '#FDE047' },
            { name: 'Crema', primary: '#F3EAC2' },
            { name: 'Mostaza', primary: '#B45309' },
            { name: 'Verde Aqua', primary: '#5EEAD4' },
            { name: 'Rojo Vino', primary: '#6B141A' },
            { name: 'Rosado Claro', primary: '#F9A8D4' },
            { name: 'Morado', primary: '#4C1D95' },
            { name: 'Morado Lila', primary: '#8B7EC8' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Amarillo Maíz', primary: '#FEF08A' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Amarillo Lumínico', primary: '#D4E11E' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Rosado Lumínico', primary: '#E11D48' },
            { name: 'Naranja Lumínico', primary: '#FF6B1A' },
            { name: 'Verde Lumínico', primary: '#84CC16' },
            { name: 'Rosado Fucsia', primary: '#DB2777' }
        ]
    },
    {
        id: 'camiseta-sin-mangas',
        code: 'CAM-TANK',
        category: 'Camisetas',
        svgType: 'tanktop',
        name: 'Camiseta Sin Mangas 100% Algodón',
        fabric: '100% Algodón',
        tags: ['100% Algodón'],
        description: 'Camiseta sin mangas (franelilla) 100% algodón para gimnasios, eventos deportivos y verano.',
        sizes: ['Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Amarillo Oro', primary: '#EAB308' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Azul Turquesa', primary: '#0284C7' },
            { name: 'Naranja', primary: '#EA580C' },
            { name: 'Verde Hunter', primary: '#143322' },
            { name: 'Rojo Vino', primary: '#6B141A' },
            { name: 'Crema', primary: '#F3EAC2' }
        ]
    },
    {
        id: 'camiseta-oversize',
        code: 'CAM-OVER',
        category: 'Camisetas',
        svgType: 'oversize',
        name: 'Camisetas Oversize (Manga Corta y Manga Larga)',
        fabric: '100% Algodón Gramaje Alto',
        tags: ['100% Algodón'],
        description: 'Camisetas de corte moderno Oversize en 100% algodón, disponibles en manga corta y manga larga.',
        sizes: ['Manga Corta (S a XXL)', 'Manga Larga (S a XXL)', 'Small', 'Medium', 'Large', 'XL', 'XXL'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Crema', primary: '#F3EAC2' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Verde Olivo', primary: '#556B2F' },
            { name: 'Rosado Claro', primary: '#F9A8D4' },
            { name: 'Verde Jade', primary: '#0D9488' },
            { name: 'Amarillo Claro', primary: '#FEF3C7' }
        ]
    },
    {
        id: 'camiseta-sublicotton',
        code: 'CAM-SUBLI',
        category: 'Camisetas',
        svgType: 'tshirt',
        name: 'Camisetas Sublicotton (Tela Microdurazno)',
        fabric: 'Tela Microdurazno Sublimable',
        tags: ['Dry Fit'],
        description: 'Camisetas en tela Microdurazno con tacto suave aspecto de algodón, diseñadas especialmente para sublimación vibrante.',
        sizes: ['2', '4', '6', '8', '10', '12', '14', '16', 'Small', 'Medium', 'Large', 'Extra Large'],
        colors: [
            { name: 'Blanco', primary: '#FFFFFF' }
        ]
    },

    // ==================== CAMISAS (Págs. 40 - 48) ====================
    {
        id: 'camisa-columbia-hombre',
        code: 'COL-H-ML/MC',
        category: 'Camisas',
        svgType: 'shirt-columbia',
        name: 'Camisa Tipo Columbia Hombre (Manga Larga / Corta)',
        fabric: 'Tela Técnica Tipo Columbia',
        tags: ['Tipo Columbia'],
        description: 'Camisa corporativa y outdoor tipo Columbia para hombre con bolsillos frontales utilitarios y ventilación en espalda.',
        sizes: ['Manga Larga (S a XXL)', 'Manga Corta (S a XXL)', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Crema', primary: '#F3EAC2' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Azul Marino', primary: '#17223B' }
        ]
    },
    {
        id: 'camisa-columbia-mujer',
        code: 'COL-M-ML/MC',
        category: 'Camisas',
        svgType: 'shirt-columbia-w',
        name: 'Camisa Tipo Columbia Mujer (Manga Larga / Corta)',
        fabric: 'Tela Técnica Tipo Columbia',
        tags: ['Tipo Columbia'],
        description: 'Camisa ejecutiva y de campo tipo Columbia con corte entallado femenino, disponible en manga larga y manga corta.',
        sizes: ['Manga Larga (S a XXL)', 'Manga Corta (S a XXL)', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Crema', primary: '#F3EAC2' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Gris', primary: '#9CA3AF' }
        ]
    },
    {
        id: 'camisa-oxford-hombre',
        code: 'OXF-H-ML/MC',
        category: 'Camisas',
        svgType: 'shirt-oxford',
        name: 'Camisa Oxford Hombre (Manga Corta / Larga)',
        fabric: 'Tela Oxford Ejecutiva',
        tags: ['Oxford'],
        description: 'Camisa formal Oxford para hombre con bolsillo en pecho izquierdo y cuello abotonado, ideal para bordado corporativo.',
        sizes: ['Manga Corta (S a XXL)', 'Manga Larga (S a XXL)', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Azul Cielo', primary: '#7DD3FC' },
            { name: 'Blanco', primary: '#FFFFFF' }
        ]
    },
    {
        id: 'camisa-oxford-mujer',
        code: 'OXF-M-ML/MC',
        category: 'Camisas',
        svgType: 'shirt-oxford-w',
        name: 'Camisa Oxford Mujer (Manga Corta / Larga)',
        fabric: 'Tela Oxford Ejecutiva',
        tags: ['Oxford'],
        description: 'Camisa formal Oxford entallada para mujer en manga corta y manga larga, impecable para oficinas y bancos.',
        sizes: ['Manga Corta (S a XXL)', 'Manga Larga (S a XXL)', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Blanco', primary: '#FFFFFF' }
        ]
    },

    // ==================== ABRIGOS (Págs. 49 - 55) ====================
    {
        id: 'abrigo-hoodie-sin-zipper',
        code: 'ABR-HZ-NO',
        category: 'Abrigos',
        svgType: 'hoodie',
        name: 'Abrigo Hoodie Sin Zipper en Poliéster',
        fabric: 'Poliéster Térmico Suave',
        tags: ['Dry Fit'],
        description: 'Abrigo cerrado en poliéster con capucha y bolsillo delantero tipo canguro. Ideal para bordado y estampado.',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Kaki', primary: '#D2C29D' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Rosado Claro', primary: '#F9A8D4' }
        ]
    },
    {
        id: 'abrigo-hoodie-con-zipper',
        code: 'ABR-HZ-SI',
        category: 'Abrigos',
        svgType: 'hoodie-zip',
        name: 'Abrigo Hoodie Con Zipper en Poliéster',
        fabric: 'Poliéster Térmico con Cierre',
        tags: ['Dry Fit'],
        description: 'Abrigo de poliéster con capucha, cierre frontal completo de zipper y bolsillos delanteros.',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Negro', primary: '#18191B' },
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Rojo', primary: '#C81E1E' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Kaki', primary: '#D2C29D' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Rosado Claro', primary: '#F9A8D4' }
        ]
    },
    {
        id: 'abrigo-jacquard',
        code: 'ABR-JACQ',
        category: 'Abrigos',
        svgType: 'hoodie-jacquard',
        name: 'Abrigo Jacquard con Relieve',
        fabric: 'Poliéster Jacquard Texturizado',
        tags: ['Dry Fit'],
        description: 'Abrigo premium de poliéster con textura geométrica en relieve, capucha sin zipper y bolsillo delantero.',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
        colors: [
            { name: 'Crema', primary: '#F3EAC2' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Blanco', primary: '#FFFFFF' },
            { name: 'Gris', primary: '#9CA3AF' },
            { name: 'Azul Royal', primary: '#1D4ED8' },
            { name: 'Azul Marino', primary: '#17223B' }
        ]
    },
    {
        id: 'abrigo-hoodie-escolar',
        code: 'ABR-ESC-CAP',
        category: 'Abrigos',
        svgType: 'hoodie-zip',
        name: 'Abrigo Hoodie Con Zipper Escolar',
        fabric: 'Poliéster Escolar',
        tags: ['Escolar'],
        description: 'Abrigo escolar azul marino con capucha, cierre de zipper y bolsillo delantero desde talla 2 hasta XL.',
        sizes: ['2', '4', '6', '8', '10', '12', '14', '16', 'Small', 'Medium', 'Large', 'Extra Large'],
        colors: [
            { name: 'Azul Marino', primary: '#17223B' }
        ]
    },
    {
        id: 'abrigo-escolar-sin-capucha',
        code: 'ABR-ESC-BOM',
        category: 'Abrigos',
        svgType: 'jacket-bomber',
        name: 'Abrigo Escolar / Corporativo Sin Capucha',
        fabric: 'Poliéster Sin Capucha',
        tags: ['Escolar'],
        description: 'Abrigo tipo bomber sin capucha con cierre de zipper y bolsillos delanteros, ideal para colegios y empresas.',
        sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
        colors: [
            { name: 'Azul Marino', primary: '#17223B' },
            { name: 'Negro', primary: '#18191B' },
            { name: 'Khaki', primary: '#D2C29D' }
        ]
    },

    // ==================== CHALECOS (Págs. 56 - 59) ====================
    {
        id: 'chaleco-ch001',
        code: 'CH-001',
        category: 'Chalecos',
        svgType: 'vest-velcro',
        name: 'Chaleco Reflectivo Velcro CH-001',
        fabric: '100% Poliéster Alta Visibilidad',
        tags: ['Seguridad'],
        description: 'Chaleco de seguridad industrial con cierre frontal en velcro y cintas reflectantes de alta visibilidad en 360 grados.',
        sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
        colors: [
            { name: 'Amarillo Lumínico', primary: '#D4E11E' },
            { name: 'Naranja Lumínico', primary: '#FF6B1A' }
        ]
    },
    {
        id: 'chaleco-ch002',
        code: 'CH-002',
        category: 'Chalecos',
        svgType: 'vest-zipper',
        name: 'Chaleco Reflectivo Zipper y Bolsillo CH-002',
        fabric: '100% Poliéster Alta Visibilidad',
        tags: ['Seguridad'],
        description: 'Chaleco de seguridad con cierre de zipper, bolsillo porta-identificación/radio y tiras reflectantes 360°.',
        sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
        colors: [
            { name: 'Amarillo Lumínico', primary: '#D4E11E' },
            { name: 'Naranja Lumínico', primary: '#FF6B1A' }
        ]
    },
    {
        id: 'chaleco-ch003',
        code: 'CH-003',
        category: 'Chalecos',
        svgType: 'vest-mesh',
        name: 'Chaleco Reflectivo Zipper y Malla CH-003',
        fabric: '100% Poliéster con Malla Ventilada',
        tags: ['Seguridad'],
        description: 'Chaleco de seguridad con cierre frontal de zipper, bandas reflectantes bicolor 360° y construcción fresca.',
        sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
        colors: [
            { name: 'Naranja Lumínico', primary: '#FF6B1A' },
            { name: 'Amarillo Lumínico', primary: '#D4E11E' },
            { name: 'Azul Royal', primary: '#1D4ED8' }
        ]
    }
];

export class StaticProductRepository extends ProductRepositoryPort {
    constructor() {
        super();
        this.products = RAW_CATALOG.map(data => new Product(data));
    }

    getAll() {
        return this.products;
    }

    getById(id) {
        return this.products.find(p => p.id === id) || null;
    }
}