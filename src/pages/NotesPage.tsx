import React, { useState, Children } from 'react';
import { PublicNavbar } from '../components/PublicNavbar';
import { PublicFooter } from '../components/PublicFooter';
import {
  FileText,
  Folder,
  FolderOpen,
  ChevronRight,
  ChevronDown,
  Search } from
'lucide-react';
// Types
type Note = {
  id: string;
  title: string;
  tags: string[];
  content: string;
  hasChart: boolean;
};
type FolderStructure = {
  name: string;
  isOpen: boolean;
  subfolders?: FolderStructure[];
  notes?: Note[];
};
// Mock Data
const INITIAL_FOLDERS: FolderStructure[] = [
{
  name: 'Market Structure',
  isOpen: true,
  subfolders: [
  {
    name: 'Basics',
    isOpen: true,
    notes: [
    {
      id: 'ms-what-is',
      title: 'What is Market Structure',
      tags: ['market-structure', 'beginner'],
      content:
      'Market structure is the framework of price action. It is defined by the sequence of highs and lows that price creates as it moves through time. A bullish market structure consists of higher highs and higher lows, while a bearish structure consists of lower highs and lower lows.\n\nUnderstanding market structure is the single most important skill a trader can develop. It tells you who is in control — buyers or sellers — and provides the context for every other tool in your arsenal.',
      hasChart: true
    },
    {
      id: 'ms-bos',
      title: 'Break of Structure (BOS)',
      tags: ['market-structure', 'beginner'],
      content:
      'A Break of Structure (BOS) occurs when price closes beyond a previous swing point in the direction of the existing trend. This is a continuation signal — it confirms that the current trend is still intact and that the dominant side (buyers or sellers) remains in control.\n\nA bullish BOS happens when price breaks above a previous swing high. A bearish BOS happens when price breaks below a previous swing low. The key word is "closes" — wicks through a level do not constitute a valid BOS.',
      hasChart: true
    },
    {
      id: 'ms-mss',
      title: 'Market Structure Shift (MSS)',
      tags: ['market-structure', 'intermediate'],
      content:
      'A Market Structure Shift (MSS) indicates a potential reversal in the prevailing trend. It occurs when price breaks a swing point against the current directional bias.\n\nFor example, in a bullish trend (higher highs, higher lows), an MSS would be a break below the most recent higher low. This signals that sellers have taken control and the structure has shifted from bullish to bearish.\n\nMSS is one of the most powerful signals in SMC trading because it marks the exact point where institutional money has likely changed direction.',
      hasChart: true
    },
    {
      id: 'ms-choch',
      title: 'Change of Character (CHoCH)',
      tags: ['market-structure', 'intermediate'],
      content:
      'Change of Character (CHoCH) is closely related to MSS but refers specifically to the first sign that the market is transitioning. While MSS confirms the shift, CHoCH is the early warning.\n\nA CHoCH in a bullish market would be the first lower low after a series of higher lows. It does not guarantee a reversal, but it puts you on alert that the character of the market is changing.',
      hasChart: true
    }]

  },
  {
    name: 'Advanced',
    isOpen: false,
    notes: [
    {
      id: 'ms-mtf',
      title: 'Multi-Timeframe Structure',
      tags: ['market-structure', 'advanced'],
      content:
      'Understanding how structure aligns across timeframes is key to high probability setups. The higher timeframe always takes precedence — a bullish 4H structure within a bearish Daily structure is a counter-trend move and carries more risk.\n\nThe ideal setup occurs when multiple timeframes align: Weekly bullish, Daily bullish, 4H pulling back to a key level. This confluence dramatically increases the probability of your trade.',
      hasChart: true
    },
    {
      id: 'ms-fractal',
      title: 'Fractal Nature of Price',
      tags: ['market-structure', 'advanced'],
      content:
      'Price is fractal, meaning the same patterns repeat on all timeframes from the monthly down to the 1-minute. A break of structure on the 5-minute chart follows the same principles as one on the weekly chart.\n\nThis fractal nature is what makes SMC concepts universally applicable across all markets and timeframes. Once you understand structure, you can trade anything.',
      hasChart: false
    }]

  }]

},
{
  name: 'Order Flow',
  isOpen: false,
  subfolders: [
  {
    name: 'Orderblocks',
    isOpen: false,
    notes: [
    {
      id: 'of-ob-what',
      title: 'What is an Orderblock',
      tags: ['orderblock', 'beginner'],
      content:
      'An orderblock is the last opposing candle before a significant move in price. It represents the area where institutional traders placed their orders before displacing price.\n\nA bullish orderblock is the last bearish candle before a strong bullish move. A bearish orderblock is the last bullish candle before a strong bearish move. These zones act as magnets for price when it returns to them.',
      hasChart: true
    },
    {
      id: 'of-ob-use',
      title: 'How to Use Orderblocks',
      tags: ['orderblock', 'intermediate'],
      content:
      'Orderblocks are primarily used as entry zones. When price returns to a valid orderblock, we look for signs of rejection to enter in the direction of the original displacement.\n\nThe most sensitive point of an orderblock is the mean threshold — the 50% level of the candle body. Price often reacts precisely at this level. Always combine orderblock entries with higher timeframe structure alignment.',
      hasChart: true
    },
    {
      id: 'of-ob-why',
      title: 'Why Orderblocks Work',
      tags: ['orderblock', 'intermediate'],
      content:
      'Orderblocks work because they represent areas of unfilled institutional orders. Large players cannot fill their entire position in one candle — they leave "footprints" that price must return to.\n\nWhen price returns to these zones, the remaining orders get filled, causing a reaction. This is not magic — it is the mechanics of how large capital operates in financial markets.',
      hasChart: true
    }]

  },
  {
    name: 'Liquidity',
    isOpen: false,
    notes: [
    {
      id: 'of-liq-understanding',
      title: 'Understanding Liquidity',
      tags: ['liquidity', 'beginner'],
      content:
      'Liquidity refers to resting orders in the market — stop losses, pending orders, and limit orders that have not yet been triggered. These orders cluster at obvious levels: swing highs, swing lows, equal highs, equal lows, and round numbers.\n\nInstitutional traders need liquidity to fill their large positions. They engineer price to move toward these clusters, trigger the orders, and use that liquidity to enter their own positions.',
      hasChart: true
    },
    {
      id: 'of-liq-sweeps',
      title: 'Liquidity Sweeps & Grabs',
      tags: ['liquidity', 'intermediate'],
      content:
      'A liquidity sweep occurs when price moves beyond a key level (taking out stops) before reversing sharply. This is one of the most common institutional tactics.\n\nThe classic pattern: price takes out the lows (triggering sell stops), then reverses aggressively upward. The sell stops provided the liquidity for institutions to buy. Understanding this mechanic is essential for avoiding being the liquidity.',
      hasChart: true
    },
    {
      id: 'of-liq-bss',
      title: 'Buy-side vs Sell-side Liquidity',
      tags: ['liquidity', 'intermediate'],
      content:
      'Buy-side liquidity sits above swing highs and equal highs — these are buy stop orders and stop losses from short sellers. Sell-side liquidity sits below swing lows and equal lows — these are sell stop orders and stop losses from long traders.\n\nPrice moves from sell-side to buy-side liquidity (and vice versa) in a continuous cycle. Understanding which pool of liquidity price is targeting gives you a roadmap for where price is heading.',
      hasChart: true
    }]

  }]

},
{
  name: 'Price Action',
  isOpen: false,
  notes: [
  {
    id: 'pa-fvg',
    title: 'Fair Value Gaps (FVG)',
    tags: ['price-action', 'intermediate'],
    content:
    'A Fair Value Gap is a three-candle pattern where the wicks of the first and third candles do not overlap, creating a gap or imbalance in price delivery. This gap represents an area where price moved too quickly, leaving unfilled orders.\n\nPrice has a tendency to return to these gaps to "rebalance" before continuing in the original direction. FVGs are excellent entry zones when combined with structure and orderblock analysis.',
    hasChart: true
  },
  {
    id: 'pa-supply-demand',
    title: 'Supply & Demand Zones',
    tags: ['price-action', 'beginner'],
    content:
    'Supply and demand zones are areas on the chart where significant buying or selling pressure has occurred. A demand zone is where buyers overwhelmed sellers, causing price to rally. A supply zone is where sellers overwhelmed buyers, causing price to drop.\n\nThese zones are identified by strong, impulsive moves away from a consolidation area. The stronger the move away, the more significant the zone.',
    hasChart: true
  },
  {
    id: 'pa-imbalance',
    title: 'Imbalance & Inefficiency',
    tags: ['price-action', 'intermediate'],
    content:
    'Imbalance refers to areas where price moved aggressively in one direction without equal participation from the opposing side. These areas appear as large-bodied candles with minimal wicks.\n\nThe market is always seeking efficiency — balanced price delivery. When an imbalance exists, there is a high probability that price will return to that area to fill the inefficiency before continuing.',
    hasChart: true
  }]

},
{
  name: 'Risk Management',
  isOpen: false,
  notes: [
  {
    id: 'rm-sizing',
    title: 'Position Sizing',
    tags: ['risk', 'beginner'],
    content:
    'Position sizing determines how much capital you risk on each trade. The golden rule: never risk more than 1-2% of your total account on a single trade.\n\nTo calculate position size: (Account Balance × Risk Percentage) ÷ (Entry Price - Stop Loss Price) = Position Size. This formula ensures that no single trade can significantly damage your account.',
    hasChart: false
  },
  {
    id: 'rm-r-r',
    title: 'Risk-to-Reward Ratios',
    tags: ['risk', 'beginner'],
    content:
    'Risk-to-reward (R:R) ratio compares the potential loss to the potential gain of a trade. A 1:3 R:R means you risk $1 to potentially make $3.\n\nWith a 1:3 R:R, you only need to win 25% of your trades to break even. This is why R:R is more important than win rate. Always ensure your minimum R:R is 1:2 before entering any trade.',
    hasChart: false
  },
  {
    id: 'rm-1pct',
    title: 'The 1% Rule',
    tags: ['risk', 'beginner'],
    content:
    'The 1% rule states that you should never risk more than 1% of your trading account on any single trade. This is the foundation of professional risk management.\n\nWith the 1% rule, you would need 100 consecutive losing trades to blow your account — a statistical near-impossibility with any reasonable strategy. This rule keeps you in the game long enough for your edge to play out.',
    hasChart: false
  }]

},
{
  name: 'Trading Psychology',
  isOpen: false,
  notes: [
  {
    id: 'tp-discipline',
    title: 'Emotional Discipline',
    tags: ['psychology', 'beginner'],
    content:
    'Emotional discipline is the ability to follow your trading plan regardless of how you feel. Fear and greed are the two emotions that destroy traders.\n\nFear causes you to exit winners too early and avoid valid setups. Greed causes you to overtrade, oversize, and hold losers too long. The antidote is a written plan that you follow mechanically.',
    hasChart: false
  },
  {
    id: 'tp-losses',
    title: 'Dealing with Losses',
    tags: ['psychology', 'intermediate'],
    content:
    'Losses are not failures — they are the cost of doing business. Every professional trader loses. The difference is how they respond.\n\nAfter a loss: review the trade objectively, determine if you followed your plan, and move on. If you followed your plan and lost, that is a good trade with a bad outcome. If you deviated from your plan, that is a bad trade regardless of outcome.',
    hasChart: false
  },
  {
    id: 'tp-process',
    title: 'The Process Mindset',
    tags: ['psychology', 'advanced'],
    content:
    'The process mindset means focusing entirely on execution quality rather than P&L. You cannot control whether a trade wins or loses — you can only control whether you executed your plan correctly.\n\nJudge yourself on process, not results. Did you wait for your setup? Did you size correctly? Did you manage the trade according to plan? If yes, it was a successful trade — regardless of the outcome.',
    hasChart: false
  }]

},
{
  name: 'Macro Analysis',
  isOpen: false,
  subfolders: [
  {
    name: 'Fundamentals',
    isOpen: false,
    notes: [
    {
      id: 'ma-rates',
      title: 'Interest Rates & Forex',
      tags: ['macro', 'advanced'],
      content:
      'Interest rate differentials are the primary driver of currency valuations. When a central bank raises rates, its currency typically strengthens because higher rates attract foreign capital seeking better returns.\n\nTraders must monitor central bank meetings, forward guidance, and economic data that influences rate decisions. The relationship between rates and currencies is not always immediate — markets often price in expectations ahead of actual decisions.',
      hasChart: true
    },
    {
      id: 'ma-cpi',
      title: 'CPI & Inflation Data',
      tags: ['macro', 'advanced'],
      content:
      'The Consumer Price Index (CPI) measures inflation — the rate at which prices for goods and services are rising. Central banks use CPI data to make interest rate decisions.\n\nHigher-than-expected CPI typically leads to expectations of rate hikes (bullish for the currency). Lower-than-expected CPI suggests potential rate cuts (bearish for the currency). CPI releases are among the highest-impact news events for forex traders.',
      hasChart: true
    }]

  },
  {
    name: 'Intermarket',
    isOpen: false,
    notes: [
    {
      id: 'ma-dxy',
      title: 'DXY Correlations',
      tags: ['macro', 'advanced'],
      content:
      'The Dollar Index (DXY) measures the US Dollar against a basket of major currencies. It has an inverse correlation with most USD pairs (EUR/USD, GBP/USD) and a positive correlation with USD/JPY, USD/CHF.\n\nWhen DXY is rising, expect bearish pressure on EUR/USD and bullish pressure on USD/JPY. DXY also inversely correlates with gold and often with risk assets like equities and crypto.',
      hasChart: true
    },
    {
      id: 'ma-bonds',
      title: 'Bond Yields & Equities',
      tags: ['macro', 'advanced'],
      content:
      'Bond yields and equity markets have a complex relationship. Rising yields typically pressure growth stocks (higher discount rate for future earnings) but can benefit financial stocks (wider lending margins).\n\nThe 10-year Treasury yield is the most watched benchmark. Rapid yield spikes often trigger equity sell-offs, while falling yields tend to support risk assets. Understanding this relationship provides macro context for your trades.',
      hasChart: true
    }]

  }]

}];

export function NotesPage() {
  const [folders, setFolders] = useState<FolderStructure[]>(INITIAL_FOLDERS);
  const [selectedNote, setSelectedNote] = useState<Note | null>(
    INITIAL_FOLDERS[0].subfolders![0].notes![0]
  );
  const toggleFolder = (path: number[]) => {
    const newFolders = JSON.parse(JSON.stringify(folders));
    let current = newFolders[path[0]];
    for (let i = 1; i < path.length; i++) {
      if (current.subfolders) {
        current = current.subfolders[path[i]];
      }
    }
    current.isOpen = !current.isOpen;
    setFolders(newFolders);
  };
  const renderTree = (items: FolderStructure[], path: number[] = []) => {
    return items.map((item, idx) => {
      const currentPath = [...path, idx];
      const hasChildren =
      item.subfolders && item.subfolders.length > 0 ||
      item.notes && item.notes.length > 0;
      return (
        <div key={idx} className="ml-4 border-l border-border/50 pl-2">
          <div
            className="flex items-center gap-2 py-1.5 cursor-pointer hover:text-gold text-sm text-text-secondary select-none"
            onClick={() => toggleFolder(currentPath)}>

            {hasChildren ?
            item.isOpen ?
            <ChevronDown size={14} /> :

            <ChevronRight size={14} /> :


            <span className="w-[14px]"></span>
            }
            {item.isOpen ?
            <FolderOpen size={14} className="text-gold" /> :

            <Folder size={14} />
            }
            <span className="font-mono">{item.name}</span>
          </div>

          {item.isOpen &&
          <div>
              {item.subfolders && renderTree(item.subfolders, currentPath)}
              {item.notes &&
            item.notes.map((note) =>
            <div
              key={note.id}
              onClick={() => setSelectedNote(note)}
              className={`ml-6 flex items-center gap-2 py-1.5 cursor-pointer text-sm transition-colors ${selectedNote?.id === note.id ? 'text-gold font-bold bg-bg-elevated/50 -ml-2 pl-8 rounded-r' : 'text-text-muted hover:text-text-primary'}`}>

                    <FileText size={12} />
                    <span className="font-mono truncate">{note.title}</span>
                  </div>
            )}
            </div>
          }
        </div>);

    });
  };
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />

      <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        <div className="max-w-7xl mx-auto w-full mb-8">
          <h1 className="text-4xl font-serif text-text-primary mb-2">
            Trading Notes
          </h1>
          <p className="text-text-secondary font-mono text-sm">
            A digital garden of trading concepts, definitions, and frameworks.
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col md:flex-row gap-8 pb-12 min-h-[600px]">
          {/* LEFT SIDEBAR - FILE EXPLORER */}
          <div className="w-full md:w-80 flex-shrink-0 bg-bg-card border border-border rounded-lg flex flex-col h-[600px]">
            <div className="flex-grow overflow-y-auto p-4 -ml-4">
              {renderTree(folders)}
            </div>
          </div>

          {/* RIGHT CONTENT - NOTE DETAIL */}
          <div className="flex-grow bg-bg-card border border-border rounded-lg p-8 md:p-12 overflow-y-auto h-[600px]">
            {selectedNote ?
            <article className="max-w-3xl mx-auto">
                <div className="mb-8 border-b border-border pb-6">
                  <h1 className="text-4xl font-serif text-text-primary mb-4">
                    {selectedNote.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {selectedNote.tags.map((tag) =>
                  <span
                    key={tag}
                    className="text-xs font-mono text-gold border border-gold/30 px-2 py-1 rounded bg-gold/5 uppercase tracking-wider">

                        #{tag}
                      </span>
                  )}
                  </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none font-serif text-text-secondary leading-loose">
                  {selectedNote.content.split('\n\n').map((paragraph, i) =>
                <p key={i}>{paragraph}</p>
                )}

                  {selectedNote.hasChart &&
                <div className="my-8">
                      <div className="w-full aspect-video bg-bg-elevated border border-border rounded flex flex-col items-center justify-center relative overflow-hidden">
                        <FileText
                      className="text-text-muted mb-4 opacity-50"
                      size={48} />

                        <span className="text-text-muted text-xs uppercase tracking-widest font-mono">
                          Chart Example: {selectedNote.title}
                        </span>
                      </div>
                      <p className="text-sm text-text-muted font-mono text-center mt-2 italic">
                        Figure 1.1: Visual representation of{' '}
                        {selectedNote.title} on the 4H timeframe.
                      </p>
                    </div>
                }

                  <h3>Key Takeaways</h3>
                  <ul className="list-disc pl-5 space-y-2 font-mono text-sm">
                    <li>Always wait for confirmation before entering.</li>
                    <li>
                      Context is king — where is this happening in the higher
                      timeframe structure?
                    </li>
                    <li>
                      Risk management must be applied to every single setup.
                    </li>
                  </ul>
                </div>
              </article> :

            <div className="h-full flex flex-col items-center justify-center text-text-muted">
                <Search size={48} className="mb-4 opacity-20" />
                <p className="font-mono">Select a note to view details</p>
              </div>
            }
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>);

}