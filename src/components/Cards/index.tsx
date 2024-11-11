import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Masonry,
} from 'react-virtualized'
import { useRef } from 'react'
import {
  createCellPositioner,
  MasonryCellProps,
} from 'react-virtualized/dist/es/Masonry'

// Components
import Card from 'components/Card'

// Styled
import { Container } from './styled'
import { width, spacing } from 'styles'

const CARD_WIDTH = parseInt(width.sm, 10)
const DEFAULT_GAP = parseInt(spacing['5'], 10)

function Cards() {
  const masonryRef = useRef<Masonry>(null)

  const cache = new CellMeasurerCache({
    defaultHeight: 250,
    defaultWidth: 200,
    fixedWidth: true,
  })

  const cellPositioner = createCellPositioner({
    cellMeasurerCache: cache,
    columnCount: 10,
    columnWidth: CARD_WIDTH,
    spacer: DEFAULT_GAP,
  })

  const handleResize = ({ width }: { height: number; width: number }) => {
    if (!masonryRef.current) {
      return void 0
    }

    cache.clearAll()

    const columnCount = Math.floor(width / (CARD_WIDTH + DEFAULT_GAP))

    cellPositioner.reset({
      columnCount,
      columnWidth: CARD_WIDTH,
      spacer: DEFAULT_GAP,
    })

    masonryRef.current.clearCellPositions()
  }

  return (
    <Container>
      <AutoSizer onResize={handleResize} overscanByPixels={0}>
        {({ width, height }) => (
          <Masonry
            ref={masonryRef}
            autoHeight={false}
            cellCount={1000}
            cellMeasurerCache={cache}
            cellPositioner={cellPositioner}
            cellRenderer={({ index, key, parent, style }: MasonryCellProps) => (
              <CellMeasurer
                cache={cache}
                index={index}
                key={key}
                parent={parent}
              >
                <Card
                  style={{
                    ...style,
                    width: CARD_WIDTH,
                  }}
                />
              </CellMeasurer>
            )}
            height={height}
            width={width}
            overscanByPixels={0}
          />
        )}
      </AutoSizer>
    </Container>
  )
}

export default Cards
